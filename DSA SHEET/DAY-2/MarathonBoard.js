function sortMarathonResults(runners) {
    if(runners.length < 1) {
        return [];
    }
    let copy = [];
    for(val of runners) {
        copy.push(val);
    }
    merge_sort(copy, 0, copy.length-1);
    // merge(copy, 0, 0, 1);
    // merge(copy, 0, 1, 2);
    return copy;

}
function merge_sort(runners, st, ei) {
    if(st >= ei) {
        return;
    }
    let mid = Math.floor( st + ( ei - st) / 2);
    merge_sort(runners, st, mid);
    merge_sort(runners, mid+1, ei);
    merge(runners, st, mid, ei);
}
function merge(runners, st, mid, ei) {
    let n1 = mid - st + 1;
    let n2 = ei - mid;
    let left = [];
    let right = [];
    for(let i=0; i < n1; i++) {
        left.push(runners[st+i]);
    }
    for(let j=0; j < n2; j++) {
        right.push(runners[mid + j + 1]);
    }
    let p1 = p2 = 0, k = st;
    while(p1 < n1 && p2 < n2) {
        if(left[p1].time < right[p2].time) {
            runners[k] = left[p1];
            p1++;
        }   else if(left[p1].time > right[p2].time) {
            runners[k] = right[p2];
            p2++;
        }   else {
            let name_sort = left[p1].name.localeCompare(right[p2].name);

            if(name_sort > 0) {
                runners[k] = right[p2];
                p2++;
            } else {
                runners[k] = left[p1];
                p1++;
            }
        }
        k++;
    }

    while(p1 < n1) {
        runners[k++] = left[p1++];
    }
    while(p2 < n2) {
        runners[k++] = right[p2++];
    }
}
