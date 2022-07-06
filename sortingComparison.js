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

/* 1) 선택 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 10000개를 담은 배열 생성
let arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

// 시간차 출력
console.log("선택 정렬 소요 시간:", endTime - startTime);

/* 2) 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 10000개를 담은 배열 생성
arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("삽입 정렬 소요 시간:", endTime - startTime);

/* 3) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 10000개를 담은 배열 생성
arr = Array.from({length: 10000}, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("정렬된 배열에 대한 선택 정렬 소요 시간:", endTime - startTime);

/* 4) 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */
// 0부터 999까지의 정수 10000개를 담은 배열 생성
arr = Array.from({length: 10000}, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("정렬된 배열에 대한 삽입 정렬 소요 시간:", endTime - startTime);
