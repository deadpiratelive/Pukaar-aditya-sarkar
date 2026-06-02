const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'confessions.json');

app.use(cors());
app.use(express.json());

// Serve static assets from the current directory (frontend)
app.use(express.static(__dirname));

// Initial default confessions to populate database on first run
const defaultConfessions = [
  {
    id: 1,
    text: "The quiet isn't empty. It's heavy. It presses against the walls until the room feels too small to breathe in.",
    mood: "silence",
    timestamp: 1780308000000
  },
  {
    id: 2,
    text: "I tried to burn the bridges, but the sparks just caught the dry grass. Now everything is burning, and I'm still on the wrong side.",
    mood: "friction",
    timestamp: 1780308010000
  },
  {
    id: 3,
    text: "It wasn't a voice, but a pull. A sudden, terrifying clarity that staying still was the only true failure.",
    mood: "call",
    timestamp: 1780308020000
  },
  {
    id: 4,
    text: "Waiting for an answer that was never promised.",
    mood: "silence",
    timestamp: 1780308030000
  },
  {
    id: 5,
    text: "The hardest part isn't the fall, it's the sudden stop. The sudden realization that the safety net was just a shadow.",
    mood: "friction",
    timestamp: 1780308040000
  },
  {
    id: 6,
    text: "I heard it in the static. A rhythm beneath the noise. It told me to wake up.",
    mood: "call",
    timestamp: 1780308050000
  }
];

// Initialize database connection
let confessionsCollection = null;

if (process.env.MONGODB_URI) {
  const { MongoClient } = require('mongodb');
  const client = new MongoClient(process.env.MONGODB_URI);
  client.connect()
    .then(conn => {
      const db = conn.db();
      confessionsCollection = db.collection('confessions');
      console.log("Connected to MongoDB Atlas successfully");
      
      // Auto-populate default confessions if collection is empty
      confessionsCollection.countDocuments()
        .then(count => {
          if (count === 0) {
            confessionsCollection.insertMany(defaultConfessions)
              .then(() => console.log("Populated MongoDB with default confessions"))
              .catch(err => console.error("Error inserting defaults in MongoDB:", err));
          }
        });
    })
    .catch(err => {
      console.error("Failed to connect to MongoDB, falling back to local file database:", err);
    });
}

// Helper to read database file safely
function readDatabase() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      // Create with default entries
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultConfessions, null, 2), 'utf8');
      return defaultConfessions;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file:", err);
    return defaultConfessions;
  }
}

// Helper to write to database file
function writeDatabase(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error("Error writing to database file:", err);
    return false;
  }
}

// API: Get confessions (optionally filter by mood)
app.get('/api/confessions', async (req, res) => {
  const moodFilter = req.query.mood;

  if (confessionsCollection) {
    try {
      const query = moodFilter ? { mood: { $regex: new RegExp(`^${moodFilter}$`, 'i') } } : {};
      const results = await confessionsCollection.find(query).sort({ timestamp: -1 }).toArray();
      // Map _id to id for client compatibility
      const mapped = results.map(c => ({
        id: c.id || c._id,
        text: c.text,
        mood: c.mood,
        timestamp: c.timestamp
      }));
      return res.json(mapped);
    } catch (err) {
      console.error("Error reading from MongoDB, falling back to local database:", err);
    }
  }

  const confessions = readDatabase();
  // Order by timestamp desc (most recent first)
  let result = [...confessions].sort((a, b) => b.timestamp - a.timestamp);

  if (moodFilter) {
    result = result.filter(c => c.mood.toLowerCase() === moodFilter.toLowerCase());
  }

  res.json(result);
});

// API: Submit a confession
app.post('/api/confessions', async (req, res) => {
  const { text, mood } = req.body;

  if (!text || !mood) {
    return res.status(400).json({ error: "Text and mood are required fields" });
  }

  if (confessionsCollection) {
    try {
      const count = await confessionsCollection.countDocuments();
      const newConfession = {
        id: count + 1,
        text: text.trim(),
        mood: mood.toLowerCase(),
        timestamp: Date.now()
      };
      await confessionsCollection.insertOne(newConfession);
      return res.status(201).json(newConfession);
    } catch (err) {
      console.error("Error writing to MongoDB, falling back to local database:", err);
    }
  }

  const confessions = readDatabase();
  
  // Calculate next ID
  const maxId = confessions.reduce((max, c) => c.id > max ? c.id : max, 0);
  
  const newConfession = {
    id: maxId + 1,
    text: text.trim(),
    mood: mood.toLowerCase(),
    timestamp: Date.now()
  };

  confessions.push(newConfession);
  
  if (writeDatabase(confessions)) {
    res.status(201).json(newConfession);
  } else {
    res.status(500).json({ error: "Failed to persist confession to database" });
  }
});

// Fallback: Send main index.html for undefined frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` PUKAAR Zine Backend is running locally`);
  console.log(` Dev URL: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
