async function makeApi(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();

        return data;
    } catch (error) {
        console.log("error:", error);
    }
}

function appendPictures(data, parent) {
    data.forEach(element => {
        let div = document.createElement("div");
        let image = document.createElement("img")
        image.src = element.urls.small;

        let p = document.createElement("p");
        p.innerHTML = `<strong> User Name</strong> : ${element.user.name}`;
        let p2 = document.createElement("p");
        p2.innerHTML = `<strong> User Bio : </strong>${element.user.bio}`;
        let p3 = document.createElement("p");
        p3.innerHTML = `<strong> Location : </strong>${element.user.location}`;

        div.append(image, p, p2, p3);
        div.onclick = () => {

            localStorage.setItem("clicked_image", JSON.stringify(element));
            window.location.href = "showimage.html";

        }

        parent.append(div);
    });
}



export { makeApi, appendPictures };

