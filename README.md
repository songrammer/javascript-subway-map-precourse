# 🚇 지하철 노선도 미션_조혜송

### 구현기능

0. 일시적으로 태그를 숨기는 기능
    - 버튼 클릭 전 관련 없는 화면을 지워준다.
1. 로컬스트로지 데이터 저장
    - 로컬 스트로지로 부터 데이터를 가져온다.
    - 로컬 스트로지로 데이터를 저장한다.
2. 전체 버튼 이벤트 
    - 역 관리,노선관리,구간관리,지하철 노선도 출력 이벤트를 만들어준다.
3. 지하철 역 관리 기능
    - 지하철 역 등록
        - 지하철 역은 2 글자 이상어야 한다.
        - 중복된 이름은 등록할 수 없다.
    - 지하철 역 삭제 
        - 노선에 이미 등록된 역은 삭제할 수 없다.
    - 지하철 역 조회
        - 등록 된 역 목록을 출력한다.   
4. 지하털 노선 관리 기능
    - 지하철 노선 등록
        - 중복된 이름은 등록할 수 없다.
        - 상행 종점과 하행 종점 역 두개를 입력해야 한다.
    - 지하철 노선 삭제 
        - 등록 된 노선을 삭제한다.
    - 지하철 노선 조회
        - 등록 된 노선 목록을 출력한다.

5. 지하철 구간 관리 기능
     - 지하철 구간 조회
        - 노선 이름 버튼을 클릭 하면, 관련 구간 정보를 수정 할 수 있다.
    - 지하철 구간 추가
        - 어떠한 위치든 추가할 수 있다.
        - 길래 길은 생길 수 없다.(구간은 일직선이다.)
    - 지하철 구간 삭제 
        - 종점을 제거하면, 상행 의 경우 다음 역이, 하행의 경우 그 전 역이 종점이 된다.
        - 노선에 포함된 역이 두개 이하일 경우에는 제거할 수 없다.
           
6. 지하철 노선 출력 기능
    - 모든 노선의 상행 종점 부터 하행 종점까지 출력한다.


#### 예외 상황에 대한 대응

- 지하철 역 등록
    - 지하철 역의 이름 길이가 1~2 글자 이외일 경우 
    - 중복된 이름을 시도할 경우
        :loudspeaker: alert로 메세지 출력 및 재입력 유도

- 지하철 역 삭제 
    - 노선에 이미 등록된 역을 삭제 하려고 할 경우
        :loudspeaker: alert로 메세지 출력 
   
- 지하철 노선 등록
    - 중복된 이름을 시도할 경우
        :loudspeaker: alert로 메세지 출력 및 재입력 유도

- 지하철 구간 삭제
    - 2개 이하가 남았을 시에, 구간 삭제를 시도할 경우
        :loudspeaker: alert로 메세지 출력 
         

 