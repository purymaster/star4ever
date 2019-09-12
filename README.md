# 별그리다

## 작업범위

- 웹 기준 브라우저 : IE7 이상, Chrome, Firefox

## 작업기간

2015-09 ~ 2015-10

## 사이트주소

[사이트 바로가기](http://star4ever.com/)

## 코딩맵

[코딩맵 바로가기](https://purymaster.github.io/star4ever/codingmap.html)

## HTML 코드 작성 규칙

- HTML은 해당 DTD의 명세에 맞게 작성한다.
- 마크업의 중첩이 깊어질 때마다 자식 엘리먼트는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정한다.
- 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.
- 빈 줄의 간격은 1줄을 초과하지 않으며, 빈 줄을 사용하는 것은 선택 사항이다.
- 개발 적용과 관련된 주석은 해당되는 영역 위에 표기한다.

## DTD 선언, 인코딩, Viewport

- HTML 문서는 반드시 DTD를 선언하며, 신규 HTML 문서 작성시 'HTML5'을 사용한다.
- 신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.
- 브라우저에서 최신 렌더링 모드로 동작하도록 meta 엘리먼트를 사용하여 어떤 렌더링 엔진을 사용할지 설정한다.
- 모바일 브라우저에 대응하는 HTML 문서의 head 엘리먼트 안에 반드시 뷰포트를 설정한다.

~~~
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>별그리다</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Pragma" content="no-cache" />
<meta name="subject" content="" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="language" content="ko" />
<meta name="viewport" content="width=1280" />
</head>
~~~