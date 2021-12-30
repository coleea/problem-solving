<img src="./img/hackerrank.gif">

# 알고리즘 문제해결 코드 모음

이 리포지토리는 알고리즘 PS의 해법을 저장해 놓는다\
\
주로 해커랭크와 프로그래머스의 문제풀이를 기록해 놓는다\
\
이하는 introduction to algorithms 3rd edition의 내용을 요약해 두었다

---

# introduction to algorithms 간단요약 (2nd edition, 한글판)

영어판 출판사 : The MIT Press (발간일 2001년 9월 1일)  
한글판 출판사 : 한빛미디어 (발간일 2005년 5월 13일)  

## ch.15 다이나믹 프로그래밍 (dynamic programming)
다이나믹 프로그래밍은 영어 이니셜을 본따 통상적으로 DP라고 부른다.  
DP는 부분해를 결합하여 전체해를 구하는 과정을 핵심 컨셉으로 삼는다. 이는 문제를 더 작은 문제로 쪼갠다는 관점에서 보면 분할정복(divide and conquer)과 유사한 컨셉이다.
DP의 또다른 핵심은 이미 계산해 놓은 작은 문제의 해답을 캐싱해놓고 다시 이 계산이 필요할 때 다시 계산하기 보다는 이미 캐싱해 놓은 값을 참조한다는 개념이다. 이는 총 연산시간을 줄여준다는 관점에서 유용하다.  
DP를 적용할 수 있는 문제는 그리디 알고리즘을 적용할 수도 있지만 모든 경우에서 그리디로 문제가 해결되는 것은 아니다. 그리디 알고리즘으로 문제가 해결되려면 문제가 몇가지 특성을 가져야 한다. 이는 다음 챕터에서 다룬다.  

DP가 이름이 다이나믹 프로그래밍인 이유는 주어진 데이터를 기반으로 연산에 필요한 데이터가 동적으로 생성되기 때문인 것으로 추정된다  

### ch.15.0 DP가 사용되는 예
가장 고전적인 예로는 피보나치 수열이 있다. n번째 항을 구할때 n-1항과 n-2항을 구하는 과정을 1번째 항이 나올때까지 재귀적으로 수행할 수 있다. 해를 구하는데 필요한 데이터를 동적으로 생성하므로 이를 DP라고 할 수 있다. 피보나치는 메모이제이션을 하지 않더라도 해는 구할 수 있으나 메모이제이션을 쓴것과 쓰지 않은 것은 효율성에서 큰 차이를 보인다. 피보나치의 예처럼 DP는 하나의 함수에서 재귀적 호출이 2번 발생하는 이진트리 같은 탐색 구조를 갖게되는 게 일반적이다. 재귀적 호출이 2번 발생한다는 뜻은 현재 위치에서 선택가능한 경우의 수가 2가지이거나 혹은 필요한 추가 데이터가 2개라는 뜻으로도 이해할 수 있다.  

정리하자면 DP의 구성요소는 다음과 같다
1. 전역해를 얻기 위해 필요한 지역해를 직접 생성해야 함
1. 지역해를 구하는 과정에서 또다른 지역해를 필요로 하는 경우가 있음. 이 경우는 재귀적 호출로 지역해의 지역해를 구하게 된다
1. 메모이제이션 : 이미 구해놓은 데이터가 필요한 경우가 있다. 이 경우는 재귀함수를 호출하는 과정에서 이진트리같은 재귀구조를 형성하는 경우에 메모이제이션이 쓰이는 경우가 있다. 이때 함수가 호출되는 여러갈래의 흐름 중에서 다른갈래에서 이미 구한 데이터를 사용하는 경우가 있다.

### 15.4 최대 공통부분 수열
2개 문자열에서 공통되는 sub-string들의 집합에서 가장 긴 문자열을 구하기.  
이는 DNA 시퀀스간의 유사도를 검증할 때 쓰인다  

### 15.5 최적 이진탐색 트리 (optimal binary search tree)
방문하는 노드의 수를 최소화하면서 탐색할 수 있는 트리를 만드는 방법을 소개한다

## ch.16 그리디(또는 그리디 선택), 최적해를 위한
지역적으로 최적해를 찾는다. 이 컨셉의 핵심은 지역적인 최적해가 전역적인 최적해로 이어진다는 믿음이다.
그리디가 항상 최적해를 구해줄수 있는건 아니다. 지역해가 최적해라면, 다시말해 지역해가 그리디라는 조건이 만족되면 지역적인 최적해가 전역적인 최적해로 이어진다. 지역해가 최적해가 되기 위해서는 다른 어떠한 방법을 동원하더라도 전역해를 얻기 위한 과정에서 해당 지역해를 거쳐가야 한다.  

대표적인 그리디의 응용은 다음과 같다
1. 미니멈 스패닝 트리 (23장)
1. 다익스트라 알고리즘 (24장)  
1. 집합 덮기 (set-covering) 휴리스틱 알고리즘(35장)  

그리디가 쓰이는 예제  
1. 동전 거스르기 문제 : 동전을 최소한으로 사용하여 거스름돈을 지불하라

### ch.16.1 활동선택 문제
### ch.16.2 그리디의 요소들  

1. 재귀(recursive)함수를 선언한다
1. 재귀의 각 단계에서 그리디 선택을 한다
1. 재귀를 이터레이션으로 치환한다  

## ch.22 [그래프] 기초  

### ch.22.1 그래프의 표현
크게 인접행렬 방식과 인접리스트 방식으로 나뉜다
인접행렬은 각 요소에 코스트를 저장하는것으로 그래프를 표현하는데 장점으로는 단일 코스트를 탐색하는 시간이 O(1)이다. 하지만 특정 노드에 연결된 모든 간선을 구할 때는 노드간의 간선이 없는 경우도 모든 행을 탐색해야 하는 비효율성을 가지고 있다. 따라서 모든 경우의 수를 구하는 과정에서는 속도적인 관점에서 적합하지 않다.

### ch.22.2 BFS (탐색방법)
프림의 최소 신장트리와 다익스트라 단일 출발점 최단 경로 알고리즘은 BFS와 유사한 아이디어를 사용한다  
BFS는 그리디의 응용이다  
BFS가 하는건 딱 한가지다. 현재까지의 코스트 총합이 최저인 노드를 찾는다. 그리고 그 노드에서 아직 이동하지 않은 다른 노드로 이동한다. 이 작업을 목적지에 도착할 때 까지 반복한다. 즉 BFS는 모든 경우의 수를 고려하지 않는다.

### ch.22.3 DFS (탐색방법)
스택기반 탐색, 또는 재귀기반 탐색.  
이 탐색은 한번 방문한 노드가 있으면 전혀 다른 노드로 관심사를 옮기지 않는다.  
BFS는 노드를 이리저리 옮겨다닌다. 즉 탐색 대상이 계속 변한다.  
하지만 DFS는 탐색 대상이 변하지 않는다. 더이상 탐색할 노드가 없을 때만이 탐색할 대상이 변한다  
이 탐색은 재귀적 탐색으로 구현할 수 있다. 스택 기반의 알고리즘은 대부분 재귀적 탐색으로 구현할 수 있다.  

### ch.22.4 DFS의 응용 (위상 정렬)
### ch.22.5 DFS의 응용 (강한 결합 요소 찾기)

## ch.23 [그래프] 최소 신장 트리 (그리디)
최소신장트리는 모든 노드를 연결하되 간선 코스트의 총합이 최소가 되는 값을 찾는 것이 목적이다.  
최소신장트리는 경로탐색과 큰 차이가 없으며 차이는 2가지 뿐이다
1. 시작점이 고정되어 있지 않다.
1. 모든 노드를 거쳐간다

최소신장트리는 전자 회로를 설계할 때 전선을 가장 적게 사용하는 방법을 고안할 때 쓰인다  

## ch.24 [그래프] 단일 출발지 최단경로 (다익스트라) (그리디)
다익스트라는 너비우선탐색에서 아이디어를 얻어 구현되었다  

## ch.25 [그래프] 모든 쌍의 최단 경로
모든 쌍의 최단 경로가 활용되는 대표적인 분야는 지도이다.  
지도에서 각 지역간 이동거리 등을 표기할 때 쓰인다  
모든 쌍의 경로를 구하는 대표적인 알고리즘은 플로이드-워샬 알고리즘이 있다
## ch.26 [그래프] 최대 플로우 (maximum-flow)
어떠한 자원이 파이프라인을 통하여 목적지까지 운반될 때 보틀넥이 없이 한번에 운송가능한 최대치를 구하는 문제이다.  
파이프에서 흐르는 액체의 흐름, 또는 통신 네트워크상의 대역폭 계산의 분야에서 사용된다.
최대 플로우 문제는 플로우 네트워크라는 그래프를 사용하여 해결한다
### ch 26.1 플로우 네트워크 (flow network)
플로우 네트워크는 각각의 간선이 0보다 큰 방향 그래프다

# 기타 주제

## ch.17 분할상환 분석 (Amortized Analysis, 연산비용 관련)
연산 코스트를 줄이는 연산 최적화 기법 3가지를 소개한다.  

## ch.21 서로소 집합의 자료구조 (537p)
대부분의 경우 집합이란 전체 집합에 대한 특정한 경우의 수를 구해놓은 경우이며 이는 이미 전체 집합에 대하여 모든 경우의 수 탐색이 완료되었다는 뜻이다. 이렇게 구한 데이터를 하나의 집합으로 클러스팅하여 캐싱해놓고 이후에 이 집합이 필요할 때 재탐색할 필요 없이 캐싱된 값을 참조하는 메모이제이션 테크닉의 일종이다.

## ch.27 정렬 네트워크
인터넷 같은 네트워크 환경에서 여러대의 노드를 활용해 연산을 병렬로 동시에 수행하는 방법을 언급한다.  
이 책에는 멀티코어 환경에서 병렬컴퓨팅을 하는 방법은 언급하지 않았는데 그건 이 책의 출간년도가 2001년이었고 그 당시에 발매된 최신 데스크탑용 프로세서는 인텔 팬티엄4, 즉 싱글코어 기반이었기 때문인 것으로 추정된다.  
이 챕터는 개인이 실제 상황에서 적용하는 일은 거의 없을 것이라 판단된다. 하지만 aws같은 클라우드 컴퓨팅 환경에서는 정렬 네트워크 기반의 병렬 프로세싱을 지원하는 서비스를 제공하고 있을 것으로 추정된다. 이러한 서비스는 높은 컴퓨팅 자원을 요구하는 리서치 분야에서 활용하고 있을 것으로 판단된다.

## ch.28 행렬 연산 (for computation science)
계산 과학 분야에서 행렬을 다룰 때 연산을 최적화하는 기법을 소개한다

## ch.29 선형 계획법 (linear method) (836p)
선형 계획법은 경영과학 분야에서 기업의 이윤을 극대화하기 위해 사용하는 연구분야의 일종이다.  
기업들이 자신이 가진 자원을 어떻게 조합하여 사용하면 최적의 결과를 얻을 수 있는지를 연구하는 분야이다.  
경우의 수를 조합한다는 개념으로 미루어 보면 수학에서의 조합(combination)과 동일한 주제가 아니냐는 반문이 있을수도 있지만 부등식을 계산하여 최댓값 혹은 최솟값을 계산하는 점에서 차이가 있다
먼저 어떠어떠한 목표를 달성하는 조건을 부등식으로 모델링한다.
이렇게 모델링한 부등식이 n개 존재하게 된다. 이 n개의 부등식을 연립하여 그 해를 만족하는 집합 중에서 최댓값 또는 최솟값을 찾는것이 목표이다. 이렇게 최댓값 혹은 최솟값을 찾아서 자원을 효율적으로 사용하여 기업의 이윤을 극대화 하거나 피해를 최소화 하는것이 목적이다.  
리니어 메서드라는 이름이 붙은 이유는 직교좌표계에서 선형 방정식의 형태로 그래프가 표현되기 때문이다.

## ch.30 다항식과 FFT(fast fourier transform)
빠른 푸리에 변환은 공학의 신호처리 분야에 사용된다  

## ch.31 수리 이론 알고리즘
### ch.31.8 소수판정 알고리즘
소수판정 알고리즘에는 에라토스테네스의 체 등이 있다

## ch.32 스트링 매칭
### ch.32.1 단순한 스트링 매칭 알고리즘
### ch.32.2 라빈-카프 알고리즘
### ch.32.3 유한 오토마타를 이용한 스트링 매칭
### ch.32.4 크누스-모리스-프랫 알고리즘 (KMP 알고리즘)
이 KMP알고리즘은 패턴 1개를 탐색하는데, 여기에 소요되는 시간은 선형시간이다. 즉 개선의 여지가 거의 없는 알고리즘이라고 할 수 있다  
## ch.32.99 번외. 아호코라식 알고리즘 (Aho-Corasick algorithm)
아호코라식은 현존하는 가장 좋은 성능의 1:n 패턴매칭 알고리즘이다.
특정 문자열 집합과 매칭되는 문자열을 빠르게 구할 때 사용된다. 이 알고리즘은 문자열 하나당 하나의 노드로 이루어진 트리구조이며 1번째 문자는 레벨1 노드, 2번째 문자는 레벨2 노드, n번째 문자는 레벨n 노드로 구성된다.

### 이 챕터의 설명은 미완성이며 작성중입니다  

## ch.33 계산 기하학 (computational geology)
컴퓨터 그래픽스 분야에서 객체를 구성하는 것은 버텍스와 엣지로 이루어진다.  
이 때 특정한 조건을 만족하는 버텍스나 엣지의 집합을 구할 때 계산 기하학의 기법이 적용된다. 따라서 계산 기하학은 수많은 경우의 수 중에서 최적의 해를 구하는 대부분의 알고리즘과는 다르게 정해진 유일한 정답을 구한다는 점에서 차이가 있다.  

## ch.34 NP-완비성 (비 결정적 다항 완비성 Non-deterministic Polynomial-completeness)
이 챕터는 특정 알고리즘이 일반적인 컴퓨터로 제한 시간내에 풀수 있는 문제인지 푸는것이 불가능한지를  판별하는 것을 목적으로 한다. 이것을 판별하기 위해서는 먼저 다항시간이라는 개념이 필요하다.
주어진 데이터의 갯수를 n이라고 할때 재귀 혹은 반복문을 이용해서 특정한 답을 구하는 알고리즘이 있다고 하자. 이 때 데이터를 참조하는 횟수를 계산해보니 최악의 경우 n^2+n^1+1이라는 횟수가 필요하다고 가정하자. 이 경우 필요한 횟수는 최고차항이 2인 다항식으로 표현되었다. 이렇게 최고차항이 미지수가 아닌 특정한 상수로 표현될 때 이를 다항시간이라고 한다. 다항시간에서 중요한건 최고차항이다. 왜냐하면 최고차항에 걸리는 시간에 비교하면 다른 항에서 소요되는 시간은 고려할만한 요소라고 보기 어려울만큼 사소하기 때문이다. 따라서 위의 다항시간의 경우 최고차항만 남겨서 n^2가 소요된다고 표기한다. 이처럼 다항시간으로 표기되는 알고리즘은 대부분의 경우 일반적인 컴퓨터에서 연산이 가능하다. 여기서 일반적인 컴퓨터란 결정론적인 튜링 머신이라고도 표현한다. 하지만 특정 알고리즘의 경우 연산시간이 다항시간으로 표기되지 않는 경우가 있다. 예를들어 처리시간이 2^n으로 표현되는 경우는 데이터의 갯수가 지수에 표기되는 경우이다. 이같은 표기법을 지수시간 (exponential time)이라고 부르며 데이터의 사이즈가 충분히 작지 않은 대부분의 경우에는 결정론적 튜링기계에서 이 알고리즘을 처리하는 것은 현실적으로 불가능하다.  
만일 당신이 수백억을 벌 수 있는 끝내주는 알고리즘을 개발했다고 가정하자. 그러나 유감스럽게도 그 알고리즘에 소요되는 시간이 지수시간인 3^n 이다. 이 경우 실제로 이 알고리즘을 사용하는 것은 사실상 불가능하다. 그래서 당신은 이렇게 지수시간으로 소요되는 알고리즘을 개선하여 다항시간으로 표현되는 알고리즘으로 변화시키고자 시도하려 한다. 하지만 그렇게 몇십년을 연구했는데도 다항시간으로 표현되는 알고리즘이 발견되지 않아 좌절하고 있다. 그런데 이 지수시간으로 표현되는 알고리즘을 다항시간으로 개선하는 것이 애초부터 불가능했다면 ? 당신은 수십년동안 그저 시간낭비를 한 것이다. 만약에 어떠한 판별식이 있어서 그 판별식에 지수시간으로 표현되는 알고리즘을 집어넣기만 하면 그 알고리즘이 다항시간으로 개선될 수 있는가를 바로 판단할 수 있는 방법이 존재했더라면 당신은 그런 시간낭비를 하지 않아도 되었을 것이다. NP-완비성은 이런 주제를 다루는 문제이다
### 이 챕터의 설명은 미완성이며 작성중입니다

## ch 35. 근사 알고리즘 (approximation algorithm)
알고리즘이 지수시간으로 표현되는 NP문제이지만 이 문제를 포기할 수 없을 때, 정답은 포기하더라도 정답에 최대한 근접한 근사치를 구하는 방법이다.  
이 근사 알고리즘은 어떠한 입력에 대해서도 최대오차 알파값을 보장해야 한다. 또는 알파의 값이 정답에서 n배이상 크지 않거나 1/n이상 작지 않다는것을 보장해야 한다.  이는 수치해석 등의 응용분야에서 사용된다.  

## 그 외 1. 알고리즘에서 중요한 토픽들
1. 집합간의 순열 또는 조합을 구할 때 집합간에 교집합이 존재하는 경우
1. 확률분석 (probability analysis) : sk 플래닛 알고리즘 중급 강좌에서 다룬다 상세는 (링크)[https://www.youtube.com/watch?v=yO422cU2cEY&list=PL9mhQYIlKEhcqOXxPOhs6pNpq681RDK4J&index=3] 를 참조하라
1.

## 기타 노트
DP와 그리디는 넘버셀렉션의 최적해를 구할때 자주 쓰인다.  
대부분의 고급 알고리즘에 등장하는 개념은 특정 조건을 만족하는 경우의 수를 빠르게 구하는 방법이다. 경우의 수 구하기 문제는 특별한 알고리즘이 없더라도 모든 경우의 수를 탐색하면 문제가 해결되지만 시간 효율성의 문제로 모든 경우의 수를 탐색하는 일은 좀처럼 없다. 알고리즘 관련 문제들에서는 탐색을 조금 더 효율적으로 하여 빠른 시간에 경우의 수를 구하는 일이 보통이다.

