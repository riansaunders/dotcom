def mergeSort(array):
    if len(array) <= 1:
        return array

    middle = len(array)//2
    left = mergeSort(array[:middle])
    right = mergeSort(array[middle:])

    l, r = 0,0
    output = []

    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            output.append(left[l])
            l += 1
        else:
            output.append(right[r])
            r += 1

    output += left[l:]
    output += right[r:]

    return output
