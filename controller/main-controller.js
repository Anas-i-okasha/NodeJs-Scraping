
const axios = require('axios');
const cheerio = require('cheerio');

    const getAllComputersData = async () =>{
        try {
            // here I am using Open sooq to scrape Computers Data
            const baseUrl = 'https://jo.opensooq.com/en/computers-and-laptops/laptops';
            const data = [];

            // only bring 10 pages 
            for (let i = 1; i < 20; i++) {
              const url = `${baseUrl}?page=${i}`;
              const response = await axios.get(url);
              const $ = cheerio.load(response.data);
              const items = $('.mb-32.relative');
        
              items.each((index, element) => {
                  const value = $(element).find('.flex.flexSpaceBetween > h2').text();
                  const title = $(element).find('.postPrice.ms-auto.bold.alignSelfCenter.font-19').text();
                  const imageLink = $(element).find('.sc-cbd35298-1.cSfYeM.postImgCont.relative.radius-8.overflowHidden.me-16 > img').attr('src');
                data.push({index, title, value, imageLink});
              });
            }
        
            return data
        } catch(error) {
            console.log(error)
        }
    }

module.exports = {
    getAllComputersData
}