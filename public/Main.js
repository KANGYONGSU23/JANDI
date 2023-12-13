const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  /*
   * 넓이 1920에 높이 1080의 FHD 풀스크린 앱을 실행시킵니다.
   * */
  const win = new BrowserWindow({
    title: "잔디", // 제목
    width: 500, // window 가로 사이즈
    height: 120, // window 세로 사이즈
    x: 1000, // window 실행 위치
    y: 15, // window 실행 위치
    resizable: false, // 창 크기 조절 가능 여부
    alwaysOnTop: true, // 항상 다른 앱에 위에 존재한다
    autoHideMenuBar: true, // 메뉴바 가리기
    backgroundColor: "#1d1d1d", // 배경색
    fullscreenable: false, // 전체화면 가능여부
    skipTaskbar: true, // 작업표시줄에 안보일지 여부
    transparent: true,
    kiosk: true,
    opacity: 0.95,
    frame: false,
    darkTheme: true,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  /*
   * ELECTRON_START_URL을 직접 제공할경우 해당 URL을 로드합니다.
   * 만일 URL을 따로 지정하지 않을경우 (프로덕션빌드) React 앱이
   * 빌드되는 build 폴더의 index.html 파일을 로드합니다.
   * */
  const startUrl = "http://localhost:4000";
  // process.env.ELECTRON_START_URL ||
  // url.format({
  //   pathname: path.join(__dirname, "/../build/index.html"),
  //   protocol: "file:",
  //   slashes: true,
  // });

  /*
   * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
   * */
  win.loadURL(startUrl);
}

app.on("ready", createWindow);
