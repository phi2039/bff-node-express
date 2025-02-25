/*
 *  Copyright 2021 Curity AB
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {BFFConfiguration} from './lib'
import {CookieSerializeOptions} from 'cookie'

export const config: BFFConfiguration = {
    clientID: 'spa-client',
    clientSecret: 'Password1',
    redirectUri: 'http://www.example.com/',
    postLogoutRedirectURI: 'http://www.example.com/',
    scope: 'openid profile',

    encKey: 'NF65meV>Ls#8GP>;!Cnov)rIPRoK^.NP', // 32-character long string,
    cookieNamePrefix: 'example',
    bffEndpointsPrefix: '/bff',
    cookieOptions: {
        httpOnly: true,
        sameSite: true,
        secure: false,
        domain: '.example.com',
        path: '/',
    } as CookieSerializeOptions,

    trustedWebOrigins: ['http://www.example.com'],
    authorizeEndpoint: 'http://login.example.com:8443/oauth/v2/oauth-authorize',
    logoutEndpoint: 'http://login.example.com:8443/oauth/v2/oauth-session/logout',
    tokenEndpoint: 'http://login.example.com:8443/oauth/v2/oauth-token',
}
