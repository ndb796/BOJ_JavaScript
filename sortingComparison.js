// 선택 정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) { // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) { // 한 칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      else { // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        break;
      }
    }
  }
}

function quickSort(arr, start, end) {
  if (start >= end) return; // 원소가 1개인 경우 종료
  let pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;
  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) left++;
    // 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) right--;
    // 엇갈렸다면 작은 데이터와 피벗을 교체
    if (left > right) [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
    else [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}

/* 1) 선택 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({length: 30000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

// 시간차 출력
console.log("선택 정렬 소요 시간:", endTime - startTime);

/* 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
arr = Array.from({length: 30000}, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("정렬된 배열에 대한 선택 정렬 소요 시간:", endTime - startTime);

/* 3) 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
arr = Array.from({length: 30000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("삽입 정렬 소요 시간:", endTime - startTime);

/* 4) 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
arr = Array.from({length: 30000}, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("정렬된 배열에 대한 삽입 정렬 소요 시간:", endTime - startTime);

/* 5) 퀵정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성
arr = Array.from({length: 30000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
quickSort(arr, 0, arr.length - 1);
endTime = new Date().getTime();

// 시간차 출력
console.log("퀵정렬 소요 시간:", endTime - startTime);
