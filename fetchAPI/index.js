export const loginAPI = async (url, post) => {
  // console.log(url, post);
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      // content-type을 명시하지 않으면 json 파일인지 인식하지 못함
      headers: {
        "Content-Type": "application/json",
        // Authorization: document.cookies.accessToken,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
    // console.log(res);
    return res.data === "Login Success" ? true : false;
  } catch (err) {
    // 에러시 false 반환
    console.log(err);
    return false;
  }
};

export const signupAPI = async (url, post) => {
  // console.log(url, post);
  try {
    const res = await fetch(`${url}/signup`, {
      method: "POST",
      // content-type을 명시하지 않으면 json 파일인지 인식하지 못함
      headers: {
        "Content-Type": "application/json",
        // Authorization: document.cookies.accessToken,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
    // console.log(res);
    return res.data === "Success" ? true : false;
  } catch (err) {
    // 에러시 false 반환
    console.log(err);
    return false;
  }
};

export const loginAPI_OAuth_URL = async (url, post) => {
  // console.log(url, post);
  // post는 플랫폼 정보
  try {
    const res = await fetch(`${url}/login/oauth_url`, {
      method: "POST",
      credentials: "include",
      // content-type을 명시하지 않으면 json 파일인지 인식하지 못함
      headers: {
        "Content-Type": "application/json",
        // Authorization: document.cookies.accessToken,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
    // console.log(res);
    return res.data;
  } catch (err) {
    // 에러시 false 반환
    console.log(err);
    return false;
  }
};

export const loginAPI_OAuth_AccessToken = async (url, post) => {
  // console.log(url, post);
  try {
    const res = await fetch(`${url}/login/oauth_token`, {
      method: "POST",
      credentials: "include",
      // content-type을 명시하지 않으면 json 파일인지 인식하지 못함
      headers: {
        "Content-Type": "application/json",
        // Authorization: document.cookies.accessToken,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
    // console.log(res);
    return res.data;
  } catch (err) {
    // 에러시 false 반환
    console.log(err);
    return false;
  }
};
