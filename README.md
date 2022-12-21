## 수정사항
### deadlock
- ios: https://github.com/software-mansion/react-native-reanimated/pull/3194
- android: https://github.com/software-mansion/react-native-reanimated/pull/3440

### 지원 react 버전 관련
- createNPMPackage.sh 스크립트에 지원할 react 버전이 versions 란 변수로 지정되어 있음
- 패키지 사용시 android 관련해서 이 버전별로 만들어지는 aar 이 있어야하는데, 굳이 패키지 파일 크게 할 필요 없으므로 사용할 버전하나만 aar 파일 생성하도록 수정

## 배포방법
### 요구사항
- gradle 7이하(7의 경우 android/gradle.propertie 파일에 정의된 `-XX:MaxPermSize=512m` 옵션에 의해 오류남)
- Android NDK설치 및 ANDROID_NDK 환경변수 설정
- npm

### 패키지파일 생성
- 'android-npm/*.aar' 파일 삭제 (생성 버전 변경이 이전꺼도 함께 패키지 됨)
- createNPMPackage.sh 실행
- 오류 없으면 `react-native-reanimated-2.2.0.tgz` 파일 생성됨
- 오류시 일부 과정에서는 'android', 'android-npm' 디렉토리가 'android-temp', 'android' 로 변경되므로 필요시 원래 디렉토리명으로 변경
- 실행후 yarn.lock 파일이 변경되는데(`yarn add react-native@특정버전`에 의해) 변경사항을 commit 할필요는 없음(restore 시킴)

### github Release 추가
- Release 추가시 생성된 패키지파일(tar.gz)도 함께 추가하여 추가한 첨부 파일 경로로 `yarn add https://.../react-native-reanimated-2.2.0.tgz`와 같이 추가하여 사용
