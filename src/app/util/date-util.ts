
export const stringToDate = (data: string)=>{
    let dataArray = data.split('-');
    
    let dataArrayNumerico = dataArray.map((numeroTexto)=>{
         return Number(numeroTexto);
    })
    
    let dataDate = new Date(dataArrayNumerico[0], dataArrayNumerico[1], dataArrayNumerico[3]);
    
    console.log(dataArray);
}

export const dataDeHojeMenos30Dias = ()=>{
  return getDate(-30);
}
export const dataDeHojeMais30Dias = ()=>{
  return getDate(30);
}

export const getDate = (dias: number)=>{
  let data = new Date();
  data.setDate(data.getDate() + dias)
  
  return data;
  
}

export const dateToString = (data: Date)=>{
    
  let month =  (data.getMonth() + 1).toString();
  let date = data.getDate().toString();
  if(month.length === 1){
    month = '0'+month;
  }
  
  if(date.length === 1){
    date = '0'+date;
  }
    
    return `${data.getFullYear()}-${month}-${date}`;
}

/* export const preecherDataComRange = ({dataInicial, dataFinal})=>{
  if(!Boolean(dataInicial)){
    dataInicial = dateToString(dataDeHojeMenos30Dias());
  }
  if(!Boolean(dataInicial)){
    dataFinal = dateToString(dataDeHojeMais30Dias());    
  }
  
} */