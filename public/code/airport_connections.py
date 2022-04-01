def airportConnections(airports, routes, startingAirport):
	adj = {s:[] for s in airports}
	unreachable = set()
	valuables = []
	
# 	Build the adjacency list
	for v, e in routes:
		adj[v].append(e)
	
# 	Which airports can't I get to ?
	s = [startingAirport]
	visit = set()
	while s:
		v = s.pop()
		if v in visit:
			continue
		visit.add(v)
		for e in adj[v]:
			s.append(e)

# 	Find out which airports can't be reached.
	for a in airports:
		if not a in visit:
			unreachable.add(a)
			
# 	Check if we can reach all.
	if len(visit) == len(adj):
		return 0
	
	canreach = {s:set() for s in airports}
# 	Check which airports can get to all of my unreachables, and how many can it get too?
	for v in airports:
		if v == startingAirport:
			continue
		q = [v]
		ct = 0
		seen = set()
		while q:
			ve = q.pop()
			if ve in seen:
				continue
				
			seen.add(ve)
			canreach[v].add(ve)
			
			for edge in adj[ve]:
				q.append(edge)
			
			if ve in unreachable:
				ct += 1
# 		I'm going to account for it later, if it doesn't go anywhere I need.
		if ct > 0:
			valuables.append([ct, v])

# 	Go through the most valuable edges, decrementing my unreachable until
	res = 0
	valuables.sort()
	
# 	Change heap to array for O(1) pops.
	while valuables and unreachable:
		_, airport = valuables.pop()
		didUse = False
		for e in canreach[airport]:
			if e in unreachable:
				didUse = True
				unreachable.remove(e)
		if didUse:
			res += 1
			
	res += len(unreachable)
	return res
