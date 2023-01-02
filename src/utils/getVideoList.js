export async function getVideoList() {
  try{
    const res = await fetch('https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=anything&key=AIzaSyA3L0qxW1WWJCTMAvUIJcCwsajoiymMrSo')
    
    const data = await res.json()
    const videoIds = [];
    console.log(data.items)
    data.items.map((item)=>{
      videoIds.push({
        id: item.id.videoId,
        description: item.snippet.description
      })
    })
    console.log(videoIds)
    return videoIds;
  }catch(error) {
    throw new Error('unable to get videos')
  }
}