//HELPER FUNCTION  -- DESTRUCTURE API DATA 
export const formatAPI =(items)=>{
// loop through <data></data>

  let temporyItems = items.map(data =>{
    const {"im:id":id} = data.id.attributes;
    const {"im:artist":{label:artist}} = data;
    const {label} = data.category.attributes;
  
    const {"im:name" :{label:title}}= data;  
    const {"im:price" :{label:price}}= data;

    const {"im:releaseDate" :{attributes:{label: dateRelease}}}= data;       
    const {href}= data.link.attributes;
    // IMAGE MANIPULATION
    const {"im:image" : [index]} = data; 
     // 2- change the size of the img because are too small
     const image= index.label.replace(/55x55bb.png/gi, '170x170bb.png');

      // 3- return  new obj - with field we need
    return {id, artist, label, title, price, dateRelease,href, image};
  });
return  temporyItems;
};//end formatAPI



// FORMAT ISSUE TO INVESTIGATE FOR:
// const {label: rights}= data.rights; 

 /**
  *    // 1- destruture obj we need
    const {"im:id":id} = data.id.attributes;
    const {"im:artist":{label:artist}} = data;
     
    const {label} = data.category.attributes;
    const {label: rights}= data.rights; 
    const {"im:name" :{label:title}}= data;  
    const {"im:price" :{label:price}}= data;       
    const {"im:releaseDate" :{attributes:{label: dateRelease}}}= data;       
    const {"im:image" : [index]} = data;    
    const {href}= data.link.attributes;   
    // 2- change the size of the img because are too small
     const image= index.label.replace(/55x55bb.png/gi, '170x170bb.png');
  
  // 3- return  new obj - with field we need

  // console.log({id, label, artist, title, price, image ,href, rights, dateRelease})

   return {id, label, artist, title, price, image ,href, rights, dateRelease};
  */