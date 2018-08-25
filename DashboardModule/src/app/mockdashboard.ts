export class DashboardJson {
    tournamentName: string;
    matches: Match[];
}

export class Match {
    event: string;
    tableno: number;
    p1: string;
    p2: string;
    score: Score;
}

export class Game {
    p1: number;
    p2: number;
}

export class Score {
    g1: Game;
    g2: Game;
    g3: Game;
    g4: Game;
    g5: Game;
}