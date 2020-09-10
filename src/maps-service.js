// export default class MapService {
//   static async getMap() {
//     try {
//      const response = fetch(`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=myMap`);
//      console.log("response: " + response);
//      if (!response.ok) {
//        throw Error (response.statusText);
//      }
//      return response.json(); 
//     } catch(error) {
//       console.log("error type: " + error);
//       return error.message;
//     }
//   }
// }