export async function consultarCanciones(token) {
  const url ="https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US";
  const peticion = {
    method: "GET",
    headers: {
      "Authorization": token
    },
  };

  let res = await fetch(url, peticion);
  let resDatos = await res.json();
  return resDatos

}

/* 

export async function pedirDatos () {
    let url = "https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US";
    let peticion = {
      method: "GET",
      headers: {
        Authorization: "Bearer BQBUdcHn9xCqv-bKjJkl3s3KqnDjOJy7VI1kAz2oWLPOv0cwfw0eJH_fmmkLq5kbhhRuvi7gNJ5xAYloxgBQaX_LQI8lQ2bssSIsYuP2IpxMkt7gIrnt"
      }

    }

    let res =  await fetch(url,peticion);
    let resDatos = await res.json();
    console.log(resDatos);
  
    } */
