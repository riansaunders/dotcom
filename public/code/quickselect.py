def quickselect(arr, k):
	
    def helper(start, end):
        while True:
            pivot = start
            l = start + 1
            r = end
            while l <= r:
                if arr[l] > arr[pivot] > arr[r] :
                    arr[l], arr[r] = arr[r], arr[l]
                    
                if arr[l] <= arr[pivot]:
                    l += 1
                if arr[r] >= arr[pivot]:
                    r -= 1
                    
            arr[pivot], arr[r] = arr[r], arr[pivot]
            if r == k:
                return arr[r]
            elif r < k:
                start = r + 1
            else:
                end = r - 1
    k -= 1
    return helper( 0, len(arr) -1)
