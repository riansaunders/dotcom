def palindromePartitioningMinCuts(s):
	n = len(s)
	isPalindrome = [[False for _ in range(n)] for _ in range(n)]
	for i in range(n):
		isPalindrome[i][i] = True
	
	for i in range(n - 1, -1, -1):
		for j in range(i+1, n):
			if s[i] == s[j] and (j - i == 1 or isPalindrome[i + 1][j - 1]):
					isPalindrome[i][j] = True
				
				
	cuts = [0 for _ in range(n)]
	for i in range(n - 1, -1, -1):
		minCuts = n
		for j in range(n - 1, i -1, -1):
			if isPalindrome[i][j]:
				minCuts = 0 if j == n - 1 else min(minCuts, 1 + cuts[j + 1])
		cuts[i] = minCuts
	
	return cuts[0]
