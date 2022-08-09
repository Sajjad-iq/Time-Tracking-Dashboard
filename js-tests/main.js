
async function Monthly() {
    let get = await fetch("./data.json")
    let data = await get.json()

    let workHuor = document.getElementById("work-huor")
    workHuor.innerHTML = `${data[0].timeframes.monthly.current} hrs`
    let workInfo = document.getElementById("work-info")
    workInfo.innerHTML = `Last Week - ${data[0].timeframes.monthly.previous} hrs`

    let playhuor = document.getElementById("play-huor")
    playhuor.innerHTML = `${data[1].timeframes.monthly.current} hrs`
    let playinfo = document.getElementById("play-info")
    playinfo.innerHTML = `Last Week - ${data[1].timeframes.monthly.previous} hrs`

    let studyhuor = document.getElementById("study-huor")
    studyhuor.innerHTML = `${data[2].timeframes.monthly.current} hrs`
    let studyinfo = document.getElementById("study-info")
    studyinfo.innerHTML = `Last Week - ${data[2].timeframes.monthly.previous} hrs`

    let exercisehuor = document.getElementById("exercise-huor")
    exercisehuor.innerHTML = `${data[3].timeframes.monthly.current} hrs`
    let exerciseinfo = document.getElementById("exercise-info")
    exerciseinfo.innerHTML = `Last Week - ${data[3].timeframes.monthly.previous} hrs`

    let socialhuor = document.getElementById("social-huor")
    socialhuor.innerHTML = `${data[4].timeframes.monthly.current} hrs`
    let socialinfo = document.getElementById("social-info")
    socialinfo.innerHTML = `Last Week - ${data[4].timeframes.monthly.previous} hrs`

    let selfCarehuor = document.getElementById("selfCare-huor")
    selfCarehuor.innerHTML = `${data[5].timeframes.monthly.current} hrs`
    let selfCareinfo = document.getElementById("selfCare-info")
    selfCareinfo.innerHTML = `Last Week - ${data[5].timeframes.monthly.previous} hrs`

    let restColor = document.getElementById("daily")
    restColor.style.color = "hsl(236, 100%, 87%)"
    let restColor2 = document.getElementById("weekly")
    restColor2.style.color = "hsl(236, 100%, 87%)"

    let activeBTN = document.getElementById("Monthly")
    activeBTN.style.color = "white"
}

async function weekly() {
    let get = await fetch("./data.json")
    let data = await get.json()

    let workHuor = document.getElementById("work-huor")
    workHuor.innerHTML = `${data[0].timeframes.weekly.current} hrs`
    let workInfo = document.getElementById("work-info")
    workInfo.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous} hrs`

    let playhuor = document.getElementById("play-huor")
    playhuor.innerHTML = `${data[1].timeframes.weekly.current} hrs`
    let playinfo = document.getElementById("play-info")
    playinfo.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous} hrs`

    let studyhuor = document.getElementById("study-huor")
    studyhuor.innerHTML = `${data[2].timeframes.weekly.current} hrs`
    let studyinfo = document.getElementById("study-info")
    studyinfo.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous} hrs`

    let exercisehuor = document.getElementById("exercise-huor")
    exercisehuor.innerHTML = `${data[3].timeframes.weekly.current} hrs`
    let exerciseinfo = document.getElementById("exercise-info")
    exerciseinfo.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous} hrs`

    let socialhuor = document.getElementById("social-huor")
    socialhuor.innerHTML = `${data[4].timeframes.weekly.current} hrs`
    let socialinfo = document.getElementById("social-info")
    socialinfo.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous} hrs`

    let selfCarehuor = document.getElementById("selfCare-huor")
    selfCarehuor.innerHTML = `${data[5].timeframes.weekly.current} hrs`
    let selfCareinfo = document.getElementById("selfCare-info")
    selfCareinfo.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous} hrs`

    let restColor = document.getElementById("daily")
    restColor.style.color = "hsl(236, 100%, 87%)"
    let activeBTN = document.getElementById("weekly")
    activeBTN.style.color = "white"

    let restColor2 = document.getElementById("Monthly")
    restColor2.style.color = "hsl(236, 100%, 87%)"
}



async function Daily() {
    let get = await fetch("./data.json")
    let data = await get.json()
    console.log(data[0].timeframes.daily.current)

    let workHuor = document.getElementById("work-huor")
    workHuor.innerHTML = `${data[0].timeframes.daily.current} hrs`
    let workInfo = document.getElementById("work-info")
    workInfo.innerHTML = `Last Week - ${data[0].timeframes.daily.previous} hrs`

    let playhuor = document.getElementById("play-huor")
    playhuor.innerHTML = `${data[1].timeframes.daily.current} hrs`
    let playinfo = document.getElementById("play-info")
    playinfo.innerHTML = `Last Week - ${data[1].timeframes.daily.previous} hrs`

    let studyhuor = document.getElementById("study-huor")
    studyhuor.innerHTML = `${data[2].timeframes.daily.current} hrs`
    let studyinfo = document.getElementById("study-info")
    studyinfo.innerHTML = `Last Week - ${data[2].timeframes.daily.previous} hrs`

    let exercisehuor = document.getElementById("exercise-huor")
    exercisehuor.innerHTML = `${data[3].timeframes.daily.current} hrs`
    let exerciseinfo = document.getElementById("exercise-info")
    exerciseinfo.innerHTML = `Last Week - ${data[3].timeframes.daily.previous} hrs`

    let socialhuor = document.getElementById("social-huor")
    socialhuor.innerHTML = `${data[4].timeframes.daily.current} hrs`
    let socialinfo = document.getElementById("social-info")
    socialinfo.innerHTML = `Last Week - ${data[4].timeframes.daily.previous} hrs`

    let selfCarehuor = document.getElementById("selfCare-huor")
    selfCarehuor.innerHTML = `${data[5].timeframes.daily.current} hrs`
    let selfCareinfo = document.getElementById("selfCare-info")
    selfCareinfo.innerHTML = `Last Week - ${data[5].timeframes.daily.previous} hrs`

    let activeBTN = document.getElementById("daily")
    activeBTN.style.color = "white"
    let restColor = document.getElementById("weekly")
    restColor.style.color = "hsl(236, 100%, 87%)"
    let restColor2 = document.getElementById("Monthly")
    restColor2.style.color = "hsl(236, 100%, 87%)"

}

Daily()
