import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "https://ebac-shop.com.br/";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
let authorization = "TODO_EDIT_THE_AUTHORIZATION";
let ifModifiedSince = "TODO_EDIT_THE_IF-MODIFIED-SINCE";
let ifNoneMatch = "TODO_EDIT_THE_IF-NONE-MATCH";
let ifMatch = "TODO_EDIT_THE_IF-MATCH";

export default function() {
    group("/post", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/post`;
            let request = http.post(url);

            check(request, {
                "The request's POST parameters.": (r) => r.status === 200
            });
        }
    });

    group("/range/{numbytes}", () => {
        let numbytes = 'TODO_EDIT_THE_NUMBYTES'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/range/${numbytes}`;
            let request = http.get(url);

            check(request, {
                "Bytes.": (r) => r.status === 200
            });
        }
    });

    group("/hidden-basic-auth/{user}/{passwd}", () => {
        let passwd = 'TODO_EDIT_THE_PASSWD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let user = 'TODO_EDIT_THE_USER'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/hidden-basic-auth/${user}/${passwd}`;
            let request = http.get(url);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/base64/{value}", () => {
        let value = 'TODO_EDIT_THE_VALUE'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/base64/${value}`;
            let request = http.get(url);

            check(request, {
                "Decoded base64 content.": (r) => r.status === 200
            });
        }
    });

    group("/user-agent", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/user-agent`;
            let request = http.get(url);

            check(request, {
                "The request's User-Agent header.": (r) => r.status === 200
            });
        }
    });

    group("/etag/{etag}", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/etag/${etag}`;
            let params = {headers: {"If-None-Match": `${ifNoneMatch}`, "If-Match": `${ifMatch}`, "Accept": "application/json"}};
            let request = http.get(url, params);

            check(request, {
                "Normal response": (r) => r.status === 200
            });
        }
    });

    group("/digest-auth/{qop}/{user}/{passwd}", () => {
        let qop = 'TODO_EDIT_THE_QOP'; // specify value as there is no example value for this parameter in OpenAPI spec
        let passwd = 'TODO_EDIT_THE_PASSWD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let user = 'TODO_EDIT_THE_USER'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/digest-auth/${qop}/${user}/${passwd}`;
            let request = http.get(url);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/ip", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/ip`;
            let request = http.get(url);

            check(request, {
                "The Requester's IP Address.": (r) => r.status === 200
            });
        }
    });

    group("/put", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/put`;
            let request = http.put(url);

            check(request, {
                "The request's PUT parameters.": (r) => r.status === 200
            });
        }
    });

    group("/cookies", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/cookies`;
            let request = http.get(url);

            check(request, {
                "Set cookies.": (r) => r.status === 200
            });
        }
    });

    group("/brotli", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/brotli`;
            let request = http.get(url);

            check(request, {
                "Brotli-encoded data.": (r) => r.status === 200
            });
        }
    });

    group("/status/{codes}", () => {
        let codes = 'TODO_EDIT_THE_CODES'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/status/${codes}`;
            let request = http.get(url);

            check(request, {
                "Success": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/status/${codes}`;
            let request = http.patch(url);

            check(request, {
                "Success": (r) => r.status === 200
            });
        }
    });

    group("/html", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/html`;
            let request = http.get(url);

            check(request, {
                "An HTML page.": (r) => r.status === 200
            });
        }
    });

    group("/xml", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/xml`;
            let request = http.get(url);

            check(request, {
                "An XML document.": (r) => r.status === 200
            });
        }
    });

    group("/drip", () => {
        let duration = 'TODO_EDIT_THE_DURATION'; // specify value as there is no example value for this parameter in OpenAPI spec
        let code = 'TODO_EDIT_THE_CODE'; // specify value as there is no example value for this parameter in OpenAPI spec
        let delay = 'TODO_EDIT_THE_DELAY'; // specify value as there is no example value for this parameter in OpenAPI spec
        let numbytes = 'TODO_EDIT_THE_NUMBYTES'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/drip?duration=${duration}&numbytes=${numbytes}&code=${code}&delay=${delay}`;
            let request = http.get(url);

            check(request, {
                "A dripped response.": (r) => r.status === 200
            });
        }
    });

    group("/image", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/image`;
            let request = http.get(url);

            check(request, {
                "An image.": (r) => r.status === 200
            });
        }
    });

    group("/bytes/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/bytes/${n}`;
            let request = http.get(url);

            check(request, {
                "Bytes.": (r) => r.status === 200
            });
        }
    });

    group("/uuid", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/uuid`;
            let request = http.get(url);

            check(request, {
                "A UUID4.": (r) => r.status === 200
            });
        }
    });

    group("/relative-redirect/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/relative-redirect/${n}`;
            let request = http.get(url);

        }
    });

    group("/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}", () => {
        let qop = 'TODO_EDIT_THE_QOP'; // specify value as there is no example value for this parameter in OpenAPI spec
        let staleAfter = 'TODO_EDIT_THE_STALE_AFTER'; // specify value as there is no example value for this parameter in OpenAPI spec
        let passwd = 'TODO_EDIT_THE_PASSWD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let user = 'TODO_EDIT_THE_USER'; // specify value as there is no example value for this parameter in OpenAPI spec
        let algorithm = 'TODO_EDIT_THE_ALGORITHM'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/digest-auth/${qop}/${user}/${passwd}/${algorithm}/${stale_after}`;
            let request = http.get(url);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/redirect/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/redirect/${n}`;
            let request = http.get(url);

        }
    });

    group("/cookies/set", () => {
        let freeform = 'TODO_EDIT_THE_FREEFORM'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/cookies/set?freeform=${freeform}`;
            let request = http.get(url);

            check(request, {
                "Redirect to cookie list": (r) => r.status === 200
            });
        }
    });

    group("/delete", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/delete`;
            let request = http.del(url);

            check(request, {
                "The request's DELETE parameters.": (r) => r.status === 200
            });
        }
    });

    group("/basic-auth/{user}/{passwd}", () => {
        let passwd = 'TODO_EDIT_THE_PASSWD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let user = 'TODO_EDIT_THE_USER'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/basic-auth/${user}/${passwd}`;
            let request = http.get(url);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/image/png", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/image/png`;
            let request = http.get(url);

            check(request, {
                "A PNG image.": (r) => r.status === 200
            });
        }
    });

    group("/absolute-redirect/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/absolute-redirect/${n}`;
            let request = http.get(url);

        }
    });

    group("/delay/{delay}", () => {
        let delay = 'TODO_EDIT_THE_DELAY'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/delay/${delay}`;
            let request = http.get(url);

            check(request, {
                "A delayed response.": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/delay/${delay}`;
            let request = http.patch(url);

            check(request, {
                "A delayed response.": (r) => r.status === 200
            });
        }
    });

    group("/encoding/utf8", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/encoding/utf8`;
            let request = http.get(url);

            check(request, {
                "Encoded UTF-8 content.": (r) => r.status === 200
            });
        }
    });

    group("/response-headers", () => {
        let freeform = 'TODO_EDIT_THE_FREEFORM'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/response-headers?freeform=${freeform}`;
            let request = http.get(url);

            check(request, {
                "Response headers": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/response-headers?freeform=${freeform}`;
            let request = http.post(url);

            check(request, {
                "Response headers": (r) => r.status === 200
            });
        }
    });

    group("/headers", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/headers`;
            let request = http.get(url);

            check(request, {
                "The request's headers.": (r) => r.status === 200
            });
        }
    });

    group("/gzip", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/gzip`;
            let request = http.get(url);

            check(request, {
                "GZip-encoded data.": (r) => r.status === 200
            });
        }
    });

    group("/get", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/get`;
            let request = http.get(url);

            check(request, {
                "The request's query parameters.": (r) => r.status === 200
            });
        }
    });

    group("/links/{n}/{offset}", () => {
        let offset = 'TODO_EDIT_THE_OFFSET'; // specify value as there is no example value for this parameter in OpenAPI spec
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/links/${n}/${offset}`;
            let request = http.get(url);

            check(request, {
                "HTML links.": (r) => r.status === 200
            });
        }
    });

    group("/cache/{value}", () => {
        let value = 'TODO_EDIT_THE_VALUE'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/cache/${value}`;
            let request = http.get(url);

            check(request, {
                "Cache control set": (r) => r.status === 200
            });
        }
    });

    group("/image/jpeg", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/image/jpeg`;
            let request = http.get(url);

            check(request, {
                "A JPEG image.": (r) => r.status === 200
            });
        }
    });

    group("/json", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/json`;
            let request = http.get(url);

            check(request, {
                "An JSON document.": (r) => r.status === 200
            });
        }
    });

    group("/stream/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/stream/${n}`;
            let request = http.get(url);

            check(request, {
                "Streamed JSON responses.": (r) => r.status === 200
            });
        }
    });

    group("/stream-bytes/{n}", () => {
        let n = 'TODO_EDIT_THE_N'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/stream-bytes/${n}`;
            let request = http.get(url);

            check(request, {
                "Bytes.": (r) => r.status === 200
            });
        }
    });

    group("/anything/{anything}", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/anything/${anything}`;
            let request = http.get(url);

            check(request, {
                "Anything passed in request": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/anything/${anything}`;
            let request = http.patch(url);

            check(request, {
                "Anything passed in request": (r) => r.status === 200
            });
        }
    });

    group("/cookies/set/{name}/{value}", () => {
        let name = 'TODO_EDIT_THE_NAME'; // specify value as there is no example value for this parameter in OpenAPI spec
        let value = 'TODO_EDIT_THE_VALUE'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/cookies/set/${name}/${value}`;
            let request = http.get(url);

            check(request, {
                "Set cookies and redirects to cookie list.": (r) => r.status === 200
            });
        }
    });

    group("/image/webp", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/image/webp`;
            let request = http.get(url);

            check(request, {
                "A WEBP image.": (r) => r.status === 200
            });
        }
    });

    group("/cache", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/cache`;
            let params = {headers: {"If-Modified-Since": `${ifModifiedSince}`, "If-None-Match": `${ifNoneMatch}`, "Accept": "application/json"}};
            let request = http.get(url, params);

            check(request, {
                "Cached response": (r) => r.status === 200
            });
        }
    });

    group("/anything", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/anything`;
            let request = http.get(url);

            check(request, {
                "Anything passed in request": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/anything`;
            let request = http.patch(url);

            check(request, {
                "Anything passed in request": (r) => r.status === 200
            });
        }
    });

    group("/bearer", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/bearer`;
            let params = {headers: {"Authorization": `${authorization}`, "Accept": "application/json"}};
            let request = http.get(url, params);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/redirect-to", () => {
        let url = 'TODO_EDIT_THE_URL'; // specify value as there is no example value for this parameter in OpenAPI spec
        let statusCode = 'TODO_EDIT_THE_STATUS_CODE'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/redirect-to?url=${url}&status_code=${status_code}`;
            let request = http.get(url);


            sleep(SLEEP_DURATION);
        }

        // Request No. 2: 
        {
            let url = BASE_URL + `/redirect-to`;
            let request = http.patch(url);

        }
    });

    group("/image/svg", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/image/svg`;
            let request = http.get(url);

            check(request, {
                "An SVG image.": (r) => r.status === 200
            });
        }
    });

    group("/patch", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/patch`;
            let request = http.patch(url);

            check(request, {
                "The request's PATCH parameters.": (r) => r.status === 200
            });
        }
    });

    group("/deflate", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/deflate`;
            let request = http.get(url);

            check(request, {
                "Defalte-encoded data.": (r) => r.status === 200
            });
        }
    });

    group("/cookies/delete", () => {
        let freeform = 'TODO_EDIT_THE_FREEFORM'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/cookies/delete?freeform=${freeform}`;
            let request = http.get(url);

            check(request, {
                "Redirect to cookie list": (r) => r.status === 200
            });
        }
    });

    group("/digest-auth/{qop}/{user}/{passwd}/{algorithm}", () => {
        let qop = 'TODO_EDIT_THE_QOP'; // specify value as there is no example value for this parameter in OpenAPI spec
        let passwd = 'TODO_EDIT_THE_PASSWD'; // specify value as there is no example value for this parameter in OpenAPI spec
        let user = 'TODO_EDIT_THE_USER'; // specify value as there is no example value for this parameter in OpenAPI spec
        let algorithm = 'TODO_EDIT_THE_ALGORITHM'; // specify value as there is no example value for this parameter in OpenAPI spec

        // Request No. 1: 
        {
            let url = BASE_URL + `/digest-auth/${qop}/${user}/${passwd}/${algorithm}`;
            let request = http.get(url);

            check(request, {
                "Sucessful authentication.": (r) => r.status === 200
            });
        }
    });

    group("/robots.txt", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/robots.txt`;
            let request = http.get(url);

            check(request, {
                "Robots file": (r) => r.status === 200
            });
        }
    });

    group("/deny", () => {

        // Request No. 1: 
        {
            let url = BASE_URL + `/deny`;
            let request = http.get(url);

            check(request, {
                "Denied message": (r) => r.status === 200
            });
        }
    });

}