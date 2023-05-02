interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

function sumMajorCredits(subjects: MajorCredits[]): number {
    return subjects.reduce((sum, subject) => sum + subject.credits, 0);
}

function sumMinorCredits(subjects: MinorCredits[]): number {
    return subjects.reduce((sum, subject) => sum + subject.credits, 0);
}
