      const items = [
        { title: "HTML", unicode: "U+1F433" },
        { title: "CSS", unicode: "U+1F40B" },
        { title: "JavaScript", unicode: "U+1F42C" },
        { title: "React JS", unicode: "U+1F41F" },
        { title: "Node JS", unicode: "U+1F420" },
      ];

      const carousel = document.getElementById("carousel");

      items.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("item");
        carouselItem.style.setProperty("--index", index + 1);
        carouselItem.innerHTML = `
          <div class="item-body">
            <p class="title">${item.title}</p>
            <p>Unicode: ${item.unicode}</p>
          </div>
        `;
        carousel.appendChild(carouselItem);
      });
    