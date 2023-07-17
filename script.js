var Won=0,Lost=0;
var GameOver=false;
var U=document.getElementsByClassName("L1");
var M=document.getElementsByClassName("L2");
var L=document.getElementsByClassName("L3");

var ReachedPos=-10;
var Reached=false;
var ReachedEver=false;
var n=0;
function ClickOnButton(ClassName,Index)
{
   var Button=document.getElementsByClassName(ClassName);
   if(Button[Index].value==" " &&!GameOver)
    {
        Button[Index].value="O";
        Result();
        if(GameOver==false)
            {
                ComputerPlays();
            }      
    }
   
}
function ComputerPlays()
{
//First Line

    if(U[0].value=="X" && U[1].value=="X" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[0].value=="X" && U[2].value=="X" && U[1].value==" ")
        {
            U[1].value="X";
        }
    else if(U[1].value=="X" && U[2].value=="X" && U[0].value==" ")
        {
            U[0].value="X";
        }
    //Second Line
    else if(M[0].value=="X" && M[1].value=="X" && M[2].value==" ")
        {
            M[2].value="X";
        }
    else if(M[0].value=="X" && M[2].value=="X" && M[1].value==" ")
        {
            M[1].value="X";
        }
    else if(M[1].value=="X" && M[2].value=="X" && M[0].value==" ")
        {
            M[0].value="X";
        }
    //third line
    else if(L[0].value=="X" && L[1].value=="X" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[0].value=="X" && L[2].value=="X" && L[1].value==" ")
        {
            L[1].value="X";
        }
    else if(L[1].value=="X" && L[2].value=="X" && L[0].value==" ")
        {
            L[0].value="X";
        }


    //vertically First Line
    else if(U[0].value=="X" && M[0].value=="X" && L[0].value==" ")
        {
            L[0].value="X";
        }
    else if(L[0].value=="X" && M[0].value=="X" && U[0].value==" ")
        {
            U[0].value="X";
        }
    else if(U[0].value=="X" && L[0].value=="X" && M[0].value==" ")
        {
            M[0].value="X";
        } 
    //vertically Second Line
    else if(U[1].value=="X" && M[1].value=="X" && L[1].value==" ")
        {
            L[1].value="X";
        }
    else if(L[1].value=="X" && M[1].value=="X" && U[1].value==" ")
        {
            U[1].value="X";
        }
    else if(U[1].value=="X" && L[1].value=="X" && M[1].value==" ")
        {
            M[1].value="X";
        }
    //vertically Third Line
    else if(U[2].value=="X" && M[2].value=="X" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[2].value=="X" && M[2].value=="X" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[2].value=="X" && L[2].value=="X" && M[2].value==" ")
        {
            M[2].value="X";
        }
    
        
//cross line1(uml-012,210,021)


    else if(U[0].value=="X" && M[1].value=="X" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[2].value=="X" && M[1].value=="X" && U[0].value==" ")
        {
            U[0].value="X";
        }
    else if(U[0].value=="X" && L[2].value=="X" && M[1].value==" ")
        {
            M[1].value="X";
        }


//cross line1(uml-210,012,201)

    else if(U[2].value=="X" && M[1].value=="X" && L[0].value==" ")
        {
            L[0].value="X";
        }
    else if(L[0].value=="X" && M[1].value=="X" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[2].value=="X" && L[0].value=="X" && M[1].value==" ")
        {
            M[1].value="X";
        }
   
    //Codes to Defend
    else if(U[0].value=="O" && U[1].value==" "&&U[2].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[0].value==" "&&L[1].value==" "&&L[2].value==" ")
        {
            M[1].value="X";
        }
    else if(U[2].value=="O" && U[1].value==" "&&U[0].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[0].value==" "&&L[1].value==" "&&L[2].value==" ")
        {
            M[1].value="X";
        }
    else if(L[0].value=="O" && U[0].value==" "&& U[1].value==" "&&U[2].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[1].value==" "&&L[2].value==" ")
        {
            M[1].value="X";
        }
    else if(L[2].value=="O" && U[0].value==" "&&U[1].value==" " && U[2].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[0].value==" "&&L[1].value==" ")
        {
            M[1].value="X";
        }
    else if(M[1].value=="O" &&  U[0].value==" "&&U[1].value==" " && U[2].value==" "&&M[0].value==" "&&M[2].value==" "&&L[0].value==" "&&L[1].value==" " &&L[2].value==" " )
        {
            var Number= RandomWithRange(0,3);
            if(Number==0)
                {
                    U[0].value="X";
                }
            else if(Number==1)
                {
                    U[2].value="X";
                }
            else if(Number==2)
                {
                    L[0].value="X";
                }
            else if(Number==3)
                {
                    L[2].value="X";
                }
        }
    else if(U[1].value=="O" && U[0].value==" " && U[2].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[0].value==" "&&L[1].value==" "&&L[2].value==" " )
        {
            M[1].value="X";
        }
    else if(L[1].value=="O" && U[0].value==" " && U[1].value==" " && U[2].value==" "&&M[0].value==" "&&M[1].value==" "&&M[2].value==" "&&L[0].value==" " &&L[2].value==" " )
        {
            M[1].value="X";
        }
    //First Line
    else if(U[0].value=="O" && U[1].value=="O" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[0].value=="O" && U[2].value=="O" && U[1].value==" ")
        {
            U[1].value="X";
        }
    else if(U[1].value=="O" && U[2].value=="O" && U[0].value==" ")
        {
            U[0].value="X";
        }
    //Second Line
    else if(M[0].value=="O" && M[1].value=="O" && M[2].value==" ")
        {
            M[2].value="X";
        }
    else if(M[0].value=="O" && M[2].value=="O" && M[1].value==" ")
        {
            M[1].value="X";
        }
    else if(M[1].value=="O" && M[2].value=="O" && M[0].value==" ")
        {
            M[0].value="X";
        }
    //third line
    else if(L[0].value=="O" && L[1].value=="O" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[0].value=="O" && L[2].value=="O" && L[1].value==" ")
        {
            L[1].value="X";
        }
    else if(L[1].value=="O" && L[2].value=="O" && L[0].value==" ")
        {
            L[0].value="X";
        }


    //vertically First Line
    else if(U[0].value=="O" && M[0].value=="O" && L[0].value==" ")
        {
            L[0].value="X";
        }
    else if(L[0].value=="O" && M[0].value=="O" && U[0].value==" ")
        {
            U[0].value="X";
        }
    else if(U[0].value=="O" && L[0].value=="O" && M[0].value==" ")
        {
            M[0].value="X";
        } 
    //vertically Second Line
    else if(U[1].value=="O" && M[1].value=="O" && L[1].value==" ")
        {
            L[1].value="X";
        }
    else if(L[1].value=="O" && M[1].value=="O" && U[1].value==" ")
        {
            U[1].value="X";
        }
    else if(U[1].value=="O" && L[1].value=="O" && M[1].value==" ")
        {
            M[1].value="X";
        }
    //vertically Third Line
    else if(U[2].value=="O" && M[2].value=="O" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[2].value=="O" && M[2].value=="O" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[2].value=="O" && L[2].value=="O" && M[2].value==" ")
        {
            M[2].value="X";
        }
    
        



    else if(U[0].value=="O" && M[1].value=="O" && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[2].value=="O" && M[1].value=="O" && U[0].value==" ")
        {
            U[0].value="X";
        }
    else if(U[0].value=="O" && L[2].value=="O" && M[1].value==" ")
        {
            M[1].value="X";
        }



    else if(U[2].value=="O" && M[1].value=="O" && L[0].value==" ")
        {
            L[0].value="X";
        }
    else if(L[0].value=="O" && M[1].value=="O" && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[2].value=="O" && L[0].value=="O" && M[1].value==" ")
        {
            M[1].value="X";
        }



    else if(M[2].value==" " && M[1].value=="X" && M[0].value==" ")
        {
            M[2].value="X";
        }
    else if(M[0].value=="X" && M[1].value==" " && M[2].value==" ")
        {
            M[2].value="X";
        }
    else if(M[2].value=="X" && M[1].value==" " && M[0].value==" ")
        {
            M[0].value="X";
        }
    
        



    else if(U[2].value==" " && U[1].value=="X" && U[0].value==" ")
        {
            U[2].value="X";
        }
    else if(U[0].value=="X" && U[1].value==" " && U[2].value==" ")
        {
            U[2].value="X";
        }
    else if(U[2].value=="X" && U[1].value==" " && U[0].value==" ")
        {
            U[0].value="X";
        }
    
    else if(L[2].value==" " && L[1].value=="X" && L[0].value==" ")
        {
            L[2].value="X";
        }
    else if(L[0].value=="X" && L[1].value==" " && L[2].value==" ")
        {
            L[2].value="X";
        }
    else if(L[2].value=="X" && L[1].value==" " && L[0].value==" ")
        {
            L[0].value="X";
        }




    else if(M[0].value=="O"  && U[0].value==" " && U[1].value==" " && U[2].value==" " && M[2].value==" " && M[1].value==" " && L[0].value==" " && L[1].value==" " && L[2].value==" ")
        {
            U[0].value="X";

        }
    else if(M[2].value=="O"  && U[0].value==" " && U[1].value==" " && U[2].value==" " && M[0].value==" " && M[1].value==" " && L[0].value==" " && L[1].value==" " && L[2].value==" ")
        {
            U[2].value="X";
        }

     


        

    
    else
        {
            var Num=RandomWithRange(0,8)
            if(Num==0 &&U[0].value==" ")
                {
                    U[0].value="X";
                }
            else if(Num==1 &&U[1].value==" ")
                {
                    U[1].value="X";
                }
            else if(Num==2  && U[2].value==" ")
                {
                    U[2].value="X";
                }
            else if(Num==3  && M[0].value==" ")
                {
                    M[0].value="X";
                }
            else if(Num==4  && M[1].value==" ") 
                {
                    M[1].value="X";
                }
            else if(Num==5  && M[2].value==" ")
                {
                    M[2].value="X";
                }
            else if(Num==6   && L[0].value==" ")
                {
                    L[0].value="X";
                }
            else if(Num==7   && L[1].value==" ")
                {
                    L[1].value="X";
                }
            else if(Num==8   && L[2].value==" ")
                {
                    L[2].value="X";
                }
            else 
                {
                    if(U[0].value==" ")
                        {
                            U[0].value="X";
                        }
                    else if(U[1].value==" ")
                        {
                            U[1].value="X";
                        }
                    else if(U[2].value==" ")
                        {
                            U[2].value="X";
                        }
                    else if(M[0].value==" ")
                        {
                            M[0].value="X";
                        }
                    else if(M[1].value==" ")
                        {
                            M[1].value="X";
                        }
                    else if(M[2].value==" ")
                        {
                            M[2].value="X";
                        }
                    else if(L[0].value==" ")
                        {
                            L[0].value="X";
                        }
                    else if(L[1].value==" ")
                        {
                            L[1].value="X";
                        }
                    else if(L[2].value==" ")
                        {
                            L[2].value="X";
                        }
                }
        }
    Result();
}



function RandomWithRange(Min,Max)
{
    return parseInt(Math.random()*(Max-Min)+Min)
}
function Result()
{

    if(U[0].value=="X" && U[1].value=="X" && U[2].value=="X")
        {
            U[0].style.color="#24B73D";
            U[1].style.color="#24B73D";
            U[2].style.color="#24B73D";
            Lose();
        }
    else if(U[0].value=="O" && U[1].value=="O" && U[2].value=="O")
        {
            U[0].style.color="#24B73D";
            U[1].style.color="#24B73D";
            U[2].style.color="#24B73D";
            Win();
        }
    else if(M[0].value=="X" && M[1].value=="X" && M[2].value=="X")
        {
            M[0].style.color="#24B73D";
            M[1].style.color="#24B73D";
            M[2].style.color="#24B73D";
            Lose();
        }
    else if(M[0].value=="O" && M[1].value=="O" && M[2].value=="O")
        {
            M[0].style.color="#24B73D";
            M[1].style.color="#24B73D";
            M[2].style.color="#24B73D";
            Win();
        }
    else if(L[0].value=="X" && L[1].value=="X" && L[2].value=="X")
        {
            L[0].style.color="#24B73D";
            L[1].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Lose();
        }
    else if(L[0].value=="O" && L[1].value=="O" && L[2].value=="O")
        {
            L[0].style.color="#24B73D";
            L[1].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Win();
        }




    else if(U[0].value=="X" && M[0].value=="X" && L[0].value=="X")
        {
            U[0].style.color="#24B73D";
            M[0].style.color="#24B73D";
            L[0].style.color="#24B73D";
            Lose();
        }
    else if(U[0].value=="O" && M[0].value=="O" && L[0].value=="O")
        {
            U[0].style.color="#24B73D";
            M[0].style.color="#24B73D";
            L[0].style.color="#24B73D";
            Win();
        }
    else if(U[1].value=="X" && M[1].value=="X" && L[1].value=="X")
        {
            U[1].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[1].style.color="#24B73D";
            Lose();
        }
    else if(U[1].value=="O" && M[1].value=="O" && L[1].value=="O")
        {
            U[1].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[1].style.color="#24B73D";
            Win();
        }
    else if(U[2].value=="X" && M[2].value=="X" && L[2].value=="X")
        {
            U[2].style.color="#24B73D";
            M[2].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Lose();
        }
    else if(U[2].value=="O" && M[2].value=="O" && L[2].value=="O")
        {
            U[2].style.color="#24B73D";
            M[2].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Win();
        }
    else if(U[0].value=="X" && M[1].value=="X" && L[2].value=="X")
        {
            U[0].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Lose();
        }
    else if(U[0].value=="O" && M[1].value=="O" && L[2].value=="O")
        {
            U[0].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[2].style.color="#24B73D";
            Win();
        }
    else if(U[2].value=="X" && M[1].value=="X" && L[0].value=="X")
        {
            U[2].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[0].style.color="#24B73D";
            Lose();
        }
    else if(U[2].value=="O" && M[1].value=="O" && L[0].value=="O")
        {
            U[2].style.color="#24B73D";
            M[1].style.color="#24B73D";
            L[0].style.color="#24B73D";
            Win();
        }
    else if(!GameOver && U[0].value!=" " && U[1].value!=" " && U[2].value!=" "&&  M[0].value!=" " && M[1].value!=" " && M[2].value!=" " &&  L[0].value!=" " && L[1].value!=" " && L[2].value!=" " )
        {
            GameOver=true;
            document.getElementById("Res").style="color:#05750A;background-color:#F6FAF1;"
            document.getElementById("Res").innerHTML="Well tried!<br/>It's a draw!";
            Reached=true;
        }
}


function Win()
{
  GameOver=true;
  document.getElementById("Res").innerHTML="Congratulations!<br/>You Won!";
  document.getElementById("Res").style="color:#05750A;background-color:#F6FAF1;"
  Won++;
  Reached=true;
  UpdateScore();

}
function Lose()
{
   GameOver=true;
   document.getElementById("Res").innerHTML="Ooops, Bad Luck!<br/>You Lost!";
   document.getElementById("Res").style="background-color:#BF5B5B;color:black;"
   Lost++;
   Reached=true;
   UpdateScore();

}
function Reset()
{
     U[0].value=" ";
     U[1].value=" ";
     U[2].value=" ";
     M[0].value=" ";
     M[1].value=" ";
     M[2].value=" ";
     L[0].value=" ";
     L[1].value=" ";
     L[2].value=" ";


     for(var i=0;i<=2;i++)
        {
            U[i].style.color="white";
            M[i].style.color="white";
            L[i].style.color="white";

        }
     GameOver=false;
     
}


function AnimateReached()
{
    if(Reached)
        {
            var i=  document.getElementById("Res");
            
            if(ReachedPos<2 &&!ReachedEver )
                {
                     ReachedPos++;                   
                }
            else if(!ReachedEver)
                {
                     n++; 
                     if(n>=80)
                        {
                            ReachedEver=true;
                        }                                   
                }
            if(ReachedEver)
                {
                    ReachedPos--;
                    if(ReachedPos==-10)
                        {
                            Reached=false;
                            ReachedEver=false;
                            n=0;
                            Reset();
                            
                        }
                }
                      i.style.top=ReachedPos+'%';
            
           
        }
       
    
}
function UpdateScore()
{
    document.getElementById("Score").innerHTML="WON- "+Won+" : " +Lost+" -LOST";
}








setInterval(AnimateReached,10);