export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  /** Public repo URL, or null if not published */
  repo?: string | null;
  /** Live demo URL, or null if none */
  demo?: string | null;
};

// Edit this list to update the Projects section.
// Fill in `repo` / `demo` links and refine `tech` as projects get published.
export const projects: Project[] = [
  {
    title: "Airbnb Clone",
    blurb:
      "A remake of the Airbnb experience — browsing listings and booking stays — rebuilt to practice full-stack web development.",
    tech: ["JavaScript", "Node.js", "Supabase", "HTML/CSS"],
    repo: null,
    demo: null,
  },
  {
    title: "Transit Website",
    blurb:
      "A website for exploring public transit information, focused on a clean, easy-to-navigate interface.",
    tech: ["JavaScript", "HTML/CSS"],
    repo: null,
    demo: null,
  },
  {
    title: "Tower Defense Game",
    blurb:
      "A tower-defense game with waves of enemies and placeable towers, built as a desktop application.",
    tech: ["C#", "Windows Forms", "Visual Studio"],
    repo: null,
    demo: null,
  },
  {
    title: "Drunk Strava",
    blurb:
      "A tongue-in-cheek competitive running app: log your runs and climb a shared leaderboard against friends.",
    tech: ["JavaScript", "Node.js"],
    repo: null,
    demo: null,
  },
  {
    title: "Race Planner",
    blurb:
      "An \"Amazing Race\"–style game designer: it drops each team at a random location a chosen distance from a shared finish, takes a budget, and challenges two or more teams to reach the end with little to no money.",
    tech: ["JavaScript", "Maps API"],
    repo: null,
    demo: null,
  },
];
