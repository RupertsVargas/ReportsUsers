import React from 'react';
import Cookies from 'js-cookie';

export var urlCookie = Cookies.get('url') == undefined ? "http://localhost/checker/" : Cookies.get('url');
// export var urlCookie = "https://www.personalchecker.com/";
// export var urlCookie = "https://www.personalchecker.com/";
