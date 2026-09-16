let activeUsers = new Map();

export default function handler(req, res) {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ error: "Missing ID" });
    }

    activeUsers.set(id, Date.now());

    const now = Date.now();
    for (const [userId, lastSeen] of activeUsers.entries()) {
        if (now - lastSeen > 20000) {
            activeUsers.delete(userId);
        }
    }

    res.status(200).json({ count: activeUsers.size });
}
