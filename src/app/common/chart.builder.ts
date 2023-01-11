

export class ChartBuilder {

    static drawCanvas = (node: any,chartId:any) => {
       const canvas = <HTMLCanvasElement> document.getElementById(chartId);
        const ctx:any = canvas.getContext('2d') ;
        if (!canvas.getContext) {
            return;
        }
   
   
        ctx.beginPath();
        ctx.arc(120, 90, 30, 60, Math.PI, false);
        ctx.closePath();
        ctx.lineWidth = 2;
        
        ctx.strokeStyle = 'black';
        ctx.stroke();
   
        ctx.beginPath();                                  
        ctx.moveTo(120, 120);                      
        ctx.lineTo(120, 160);                   
        ctx.stroke();
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                 
        ctx.moveTo(120, 160);                      
        ctx.lineTo(60, 160);                    
        ctx.stroke();
   
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                 
        ctx.moveTo(60, 160);                     
        ctx.lineTo(40, 120);                    
        ctx.stroke();
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                  // new path
        ctx.moveTo(120, 160);                       // start at prev. point
        ctx.lineTo(160, 160);                     // line to new point
        ctx.lineTo(200, 120);                     // line to new point
        ctx.stroke();
   
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                 
        ctx.moveTo(120, 160);                      
        ctx.lineTo(120, 300);                    
        ctx.stroke();
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                
        ctx.moveTo(120, 300);                      
        ctx.lineTo(60, 360);                  
        ctx.stroke();
   
   
        ctx.strokeStyle = "black"
        ctx.beginPath();                                 
        ctx.moveTo(120, 300);                      
        ctx.lineTo(180, 360);                    
        ctx.stroke();
   
   
        //node 
   
   
        ctx.strokeStyle = node[0]
         ctx.fillStyle = node[0]
         ctx.beginPath();
         ctx.arc(120, 60, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(1, 130, 50);
        
   
         
         ctx.strokeStyle = node[1]
         ctx.fillStyle = node[1]
         ctx.beginPath();
         ctx.arc(120, 120, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(2, 130, 110);
   
       
        
         ctx.strokeStyle = node[4]
         ctx.fillStyle = node[4]
         ctx.beginPath();
         ctx.arc(120, 160, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(5, 130, 150);
   
       
   
         ctx.strokeStyle = node[3]
         ctx.fillStyle = node[3]
         ctx.beginPath();
         ctx.arc(60, 160, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(4, 70, 150);
   
        
   
         ctx.strokeStyle = node[2]
         ctx.fillStyle = node[2]
         ctx.beginPath();
         ctx.arc(40, 120, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(3, 50, 110);
   
       
   
         ctx.strokeStyle = node[5]
         ctx.fillStyle = node[5]
         ctx.beginPath();
         ctx.arc(200, 120, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(6, 210, 110);
   
        
   
   
         ctx.strokeStyle = node[6]
         ctx.fillStyle = node[6]
         ctx.beginPath();
         ctx.arc(60, 360, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(7, 50, 350);
   
        
   
   
         ctx.strokeStyle = node[7]
         ctx.fillStyle = node[7]
         ctx.beginPath();
         ctx.arc(120, 300, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(8, 110, 290);
        
   
         ctx.strokeStyle = node[8]
         ctx.fillStyle = node[8]
         ctx.beginPath();
         ctx.arc(180, 360, 10, 10, Math.PI, true);
         ctx.stroke();
         ctx.fill();
         ctx.fillStyle = "black"
         ctx.fillText(9, 190, 350);
   
         }
}