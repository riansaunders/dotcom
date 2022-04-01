def boggleBoard(board, words):
	rows, cols = len(board), len(board[0])
	trie = Trie()
	for w in words:
		trie.insert(w)
		
	res = set()
	path = set()
	dirs = [
		[1, 1], [-1, -1],
		[-1, 1], [1, -1],
		[-1, 0], [1, 0],
		[0, -1], [0, 1]
	]
	def dfs(row, col, node, curr):
		if row < 0 or row >= rows or col < 0 or col >= cols:
			return
		
		if board[row][col] not in node.characters:
			return
		
		if (row, col) in path:
			return

		char = board[row][col]
		nn = node.characters[char]
		
		curr += char
		if nn.endOfWord:
			res.add(curr)
		
		path.add((row, col))
		
		for dx, dy in dirs:
			nr, nc = row + dx, col + dy
			dfs(nr, nc, nn, curr)
		
		path.remove((row, col))
		
	for r in range(rows):
		for c in range(cols):
			dfs(r, c, trie.root, "")
	
	return list(res)

class Trie:
	def __init__(self):
		self.root = TrieNode()
		
	def insert(self, word):
		cur = self.root
		for c in word:
			if c not in cur.characters:
				cur.characters[c]  = TrieNode()
			cur = cur.characters[c]
		cur.endOfWord = True
		return True
	
class TrieNode:
	def __init__(self):
		self.characters = {}
		self.endOfWord = False