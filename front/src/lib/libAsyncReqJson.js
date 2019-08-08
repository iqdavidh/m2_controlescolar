import libConfig from "./libConfig";

const isDebug = libConfig.isDebug;

const consoleIfDebug = (data) => {
  if (isDebug) {
    console.log(data);
  }

};

const libAsyncReqJson = {

  requestGET: async (url) => {

    consoleIfDebug(url);

    return await fetch(url, {
          mode: 'cors',
          method: 'GET',
          headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
          }
        }
    )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          return json;
        })
        .catch(error => {

              consoleIfDebug(url);

              return {
                success: false,
                msg: error
              };

            }
        )

  },

  requestPOST: async (url, dataObject) => {

    const isDebug = libConfig.isDebug;

    consoleIfDebug(url);


    return await fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataObject)
        }
    )
        .then((response) => {
          return response.json();
        })
        .then((json) => {

          consoleIfDebug(json);

          return json

        })
        .catch(error => {
              consoleIfDebug(url);

              return {
                success: false,
                msg: error
              };
            }
        )
  },
  requestDELETE: async (url) => {

    consoleIfDebug(url);

    return await fetch(url, {
          mode: 'cors',
          method: 'DELETE',
          headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
          }
        }
    )
        .then((response) => {
          return response.json();
        })
        .then((json) => {

          consoleIfDebug(json);

          return json;

        })
        .catch(error => {

              consoleIfDebug(url);

              return {
                success: false,
                msg: error
              };
            }
        )
  },
  requestPUT: async (url, dataObject, fnError, fnSuccess) => {

    consoleIfDebug(url);

    return await fetch(url, {
          mode: 'cors',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataObject)
        }
    )
        .then((response) => {
          return response.json();
        })
        .then((json) => {

          consoleIfDebug(json);

          return json;

        })
        .catch(error => {

              consoleIfDebug(url);

              return {
                success: false,
                msg: error
              };

            }
        )
  }
};


export default libAsyncReqJson;
