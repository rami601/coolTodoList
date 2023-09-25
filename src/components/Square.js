import React , { useState , useEffect} from 'react'
import './square.css'

const Square = ({x,o ,id ,result, setResult , winer ,setWiner}) => {


    const [ dispable , setDisable ] = useState(false)
    const [val , setVal ] = useState('')



   
  


    const handleClick = ( ) => {
        const ran = Math.floor(Math.random() * 10)
        if(ran > 5){
            setVal('x')
            setDisable(true)
        }
        if(ran < 5){
            setVal('o')
            setDisable(true)
            
        }

    }


    useEffect(() => {
        switch (id) {
            case 1: {
                if(val ==='x'){
                    setResult([...result,result[0][0]=1]);
                    setResult([...result,result[3][0]=1]);
                    setResult([...result,result[5][0]=1]);


                }if(val == 'o'){
                    setResult([...result,result[0][0]=10]);
                    setResult([...result,result[3][0]=10]);
                    setResult([...result,result[5][0]=10]);


                }
                
                setResult(result.slice(0,8))

                break;
            }
            case 2: {

                if(val==='x'){
                setResult([...result,result[0][1]=1]);
                setResult([...result,result[6][0]=1]);

                }if(val == 'o') {
                setResult([...result,result[0][1]=10]);
                setResult([...result,result[6][0]=10]);



                }
                setResult(result.slice(0,8))

                break;
            }
            case 3: {

                if(val ==='x') {
                    setResult([...result,result[0][2]=1]);
                    setResult([...result,result[4][0]=1]);
                    setResult([...result,result[7][0]=1]);

                    
                } if(val == 'o') {
                    setResult([...result,result[0][2]=10]);
                    setResult([...result,result[4][0]=10]);
                    setResult([...result,result[7][0]=10]);

                }
               
                setResult(result.slice(0,8))


                break;
            }
            case 4: {
                if(val ==='x') {
                setResult([...result,result[1][0]=1]);
                setResult([...result,result[5][1]=1]);



                }if(val == 'o') {
                setResult([...result,result[1][0]=10]);
                setResult([...result,result[5][1]=10]);



                }
                setResult(result.slice(0,8))

                break;
            }
            case 5: {
                if(val ==='x'){
                    setResult([...result,result[1][1]=1]);
                    setResult([...result,result[3][1]=1]);
                    setResult([...result,result[4][1]=1]);
                    setResult([...result,result[6][1]=1]);

                }if(val == 'o') {
                    setResult([...result,result[1][1]=10]);
                    setResult([...result,result[3][1]=10]);
                    setResult([...result,result[4][1]=10]);
                    setResult([...result,result[6][1]=10]);

                }
                setResult(result.slice(0,8))



                break;
            }
            case 6: {
                if(val ==='x'){
                setResult([...result,result[1][2]=1]);
                setResult([...result,result[7][1]=1]);



                } if(val == 'o') {
                setResult([...result,result[1][2]=10]);
                setResult([...result,result[7][1]=10]);


                }
                setResult(result.slice(0,8))

                break;
            }
            case 7: {
                if(val ==='x'){
                    setResult([...result,result[2][0]=1]);
                    setResult([...result,result[4][2]=1])
                    setResult([...result,result[5][2]=1]);


                } if(val == 'o') {
                    setResult([...result,result[2][0]=10]);
                    setResult([...result,result[4][2]=10])
                    setResult([...result,result[5][2]=10]);

                }
               ;
                setResult(result.slice(0,8))


                break;
            }
            case 8: {
                if(val ==='x'){
                setResult([...result,result[2][1]=1])
                setResult([...result,result[6][2]=1]);



                }if(val == 'o') {
                setResult([...result,result[2][1]=10])
                setResult([...result,result[6][2]=10]);


                }
                setResult(result.slice(0,8))

                break;
            }
            case 9: {
                if(val ==='x'){
                    setResult([...result,result[2][2]=1])
                    setResult([...result,result[3][2]=1]);
                    setResult([...result,result[7][2]=1]);

                    
                }if(val == 'o') {
                    setResult([...result,result[2][2]=10])
                    setResult([...result,result[3][2]=10]);
                    setResult([...result,result[7][2]=10]);

                }
                
                setResult(result.slice(0,8))


                break;
            }
        }


        result.map( item => { 
            
            let holder = 0;
            for(let i=0; i < item.length; i++){
                holder += item[i]

            }
            if(holder === 3) {
                console.log('x win ')
                setWiner('x')
                
            }
            if( holder === 30) {
                console.log('o win ')
                setWiner('o')
            }
        })
    
  
    },[val])

    return (
        <div className=' square '>
            
            <button className={`${val==='x' ? 'x' :'o'}`} onClick={handleClick}  disabled={dispable}>
                {val}
            </button>

        </div>
    )
}

export default Square