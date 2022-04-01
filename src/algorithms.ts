export interface Algorithm {
  name: string;
  description: string;
  file: string;

  topics: string[];
}

export const codes: Algorithm[] = [
  {
    name: "Boggle Board",
    description: `
    You're given a two-dimensional array (a matrix) of potentially unequal height and width containing letters; this matrix represents a boggle board. You're also given a list of words.

Write a function that returns an array of all the words contained in the boggle board. The final words don't need to be in any particular order.

A word is constructed in the boggle board by connecting adjacent (horizontally, vertically, or diagonally) letters, without using any single letter at a given position more than once; while a word can of course have repeated letters, those repeated letters must come from different positions in the boggle board in order for the word to be contained in the board. Note that two or more words are allowed to overlap and use the same letters in the boggle board.
    `,
    file: "boggle_board.py",

    topics: ["Matrices", "Tries", "Depth First Search"],
  },
  {
    name: "Merge Sort",
    description: `An implementation of the merge sort algorithm`,
    file: "merge_sort.py",
    topics: ["Arrays"],
  },
  {
    name: "Airport Connections",
    description: `For the purpose of this question, the phrases "airport route" and "airport connection" are used interchangeably.

  You're given a list of airports (three-letter codes like "JFK"), a list of routes (one-way flights from one airport to another like ["JFK", "SFO"]), and a starting airport.
  
  Write a function that returns the minimum number of airport connections (one-way flights) that need to be added in order for someone to be able to reach any airport in the list, starting at the starting airport.
  
  Note that routes only allow you to fly in one direction; for instance, the route ["JFK", "SFO"] only allows you to fly from "JFK" to "SFO".
  
  Also note that the connections don't have to be direct; it's okay if an airport can only be reached from the starting airport by stopping at other airports first.`,
    file: "airport_connections.py",
    topics: ["Graphs"],
  },
  {
    name: "Palindromic Partitionining",
    description:
      "Given a non-empty string, write a function that returns the minimum number of cuts needed to perform on the string such that each remaining substring is a palindrome.",
    file: "palindromic_partitioning.py",
    topics: ["Strings", "Dynamic Programming"],
  },
  {
    name: "QuickSelect",
    description:
      "This is an implementation of the QuickSelect algorithm. Useful for selecting the kth smallest element in an array.",
    file: "quickselect.py",
    topics: ["Arrays"],
  },
].sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  return 0;
});
