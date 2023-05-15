const main = () => {

  const showResponseMessage = (msg = 'Check Your Internet Connection') => {
    alert(msg)
  }

  const getData = async () => {
    const data = './data/DATA.json'

    try {
      const response = await fetch(data)
      const responseJson = await response.json()

      if (responseJson.error) {
        showResponseMessage(responseJson.message)
      } else {
        renderData(responseJson.restaurants)
      }

    } catch (error) {
      console.error(error)
    }
  }

  const renderData = (datas) => {
    const listRestaurants = document.querySelector('.list-restaurant')
    listRestaurants.innerHTML = ''

    datas.forEach((data => {
      listRestaurants.innerHTML += `
              <li>
                <div class="list-card">
                  <div class="card-img">
                    <img
                      src="${data.pictureId}"
                      alt="Rumah Makan"
                      width="600"
                      height="390"
                      class="w-100"
                      tabindex="0"
                    />
                  </div>

                  <div class="list-content">
                    <div class="list-cityrate">
                      <div href="#" class="card-cityrate">
                        <i class="fa-solid fa-star"></i>
                        <label class="meta-info" aria-label="Rating ${data.rating}" tabindex="0">${data.rating}</label>
                      </div>

                      <div href="#" class="card-cityrate">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <label class="meta-info" aria-label="${data.city}" tabindex="0"
                          >${data.city}</label
                        >
                      </div>
                    </div>

                    <h3 class="card-title" tabindex="0">
                      ${data.name}
                    </h3>

                    <p class="card-text" tabindex="0">
                      ${data.description}
                    </p>
                  </div>
                </div>
              </li>
              `
    }))
  }

  getData()
}

export default main