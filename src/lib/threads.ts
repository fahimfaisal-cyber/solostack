export interface Thread {
    id: string;
    title: string;
    snippet: string;
    link: string;
    date: string;
    engagement?: {
        likes: number;
        replies: number;
    };
}

export const threads: Thread[] = [
    {
        id: "1",
        title: "Building a Real-Time Collaboration Tool",
        snippet: "Just shipped a real-time collaborative editor using Next.js 15, WebSockets, and Yjs. The syncing is buttery smooth. Thread 🧵👇",
        link: "https://twitter.com/solostack",
        date: "2 days ago",
        engagement: {
            likes: 142,
            replies: 23
        }
    },
    {
        id: "2",
        title: "Optimizing React Performance",
        snippet: "Here's what I learned after optimizing a React app that was struggling with 10k+ items. Spoiler: Virtual scrolling isn't always the answer...",
        link: "https://twitter.com/solostack",
        date: "5 days ago",
        engagement: {
            likes: 89,
            replies: 15
        }
    },
    {
        id: "3",
        title: "AI-Powered Code Reviews",
        snippet: "Experimenting with GPT-4 for code reviews. The results are wild. It caught edge cases I completely missed. Full breakdown here:",
        link: "https://twitter.com/solostack",
        date: "1 week ago",
        engagement: {
            likes: 267,
            replies: 41
        }
    },
    {
        id: "4",
        title: "Server Actions Deep Dive",
        snippet: "Next.js Server Actions are a game changer. Here's how I replaced 500+ lines of API routes with just 3 server functions 🚀",
        link: "https://twitter.com/solostack",
        date: "1 week ago",
        engagement: {
            likes: 198,
            replies: 32
        }
    },
    {
        id: "5",
        title: "Database Design Lessons",
        snippet: "Spent 3 hours debugging a slow query. Turns out, indexes matter. A lot. Here's what I learned about PostgreSQL query optimization...",
        link: "https://twitter.com/solostack",
        date: "2 weeks ago",
        engagement: {
            likes: 156,
            replies: 28
        }
    },
    {
        id: "6",
        title: "TypeScript Magic",
        snippet: "TypeScript's template literal types are absolute magic. Here's how I built a type-safe router with autocomplete for every route in my app:",
        link: "https://twitter.com/solostack",
        date: "2 weeks ago",
        engagement: {
            likes: 223,
            replies: 19
        }
    }
];
