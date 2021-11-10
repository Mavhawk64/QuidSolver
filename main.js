//------CARDS------//
  let a = [];
  function clearCards()
  {
    a = [];
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    //console.log(a);
  }

  function deleteCard()
  {
    a.pop();
    let toStr = "";
    for (i in a)
    {
      if (i == 0)
      {
        toStr = "[";
      }
      if (i != a.length - 1)
      {
        toStr += a[i]+"][";
      }
      else {
        toStr += a[i]+"]";
      }
    }
    document.getElementById("input").innerHTML = toStr;
  }

  function addCard()
  {
    if (a.length < document.getElementById('numCards').value)
    a.push(document.getElementById('cardVal').value);
    //console.log(a);
    let toStr = "[";
    for (i in a)
    {
      if (i != a.length - 1)
      {
        toStr += a[i]+"][";
      }
      else {
        toStr += a[i]+"]";
      }
    }
    document.getElementById("input").innerHTML = toStr;
  }

//------RECURSION------//
function getWords()
{
var array1 = a;
var combi = [];
var comba = [];
var temp = "";
var tempa = [];
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent; i++)
{
    temp = "";
    tempa.push([]);
    for (var j = 0; j < array1.length; j++)
    {
        if ((i & Math.pow(2,j)))
        {
            temp += array1[j];
            tempa[i].push(array1[j]);
        }
    }
    //console.log("TEMP: " + temp);
    if (temp !== "" && tempa[i].length > 1 && !combi.includes(temp))
    {
        //console.log(tempa[i]);
        combi.push(temp);
        comba.push(tempa[i]);
    }
}
  //console.log(comba);
  let r = [];
  for (let i = 0; i < comba.length; i++)
  {
    //console.log("COMBA: " + comba[i]);
    let t = getWord(comba[i]);
    //console.log("T: " + t);
    if (t != "<br>[]")
    {
      r.push(t);
    }
  }
  //console.log(r);
  document.getElementById("output").innerHTML = r;
}



  //------DICTIONARY------//
  function getWord(a1)
  {
  //  console.log("A1: " + a1);
    //Import the dictionary.
    let arr = (new Words(a1)).checkArr;
    //console.log(arr);
    //This will generate all words that have the same length and letters.
    let r = [];
    //console.log(r);

    for (word in arr)
    {
      let bool = checkCanForm(arr[word], a1);
      //console.log("Formable? " + bool);
       if (bool)
       {
         //console.log(word);
         r.push(word);
       }
    }
    //console.log(r);
    let toStr = "<br>[";
    let pool = false;
    for (i in r)
    {
      //console.log(r[i]);
      if (i != r.length - 1) //&& i != r.length - 2)
      {
        toStr += r[i].toUpperCase()+"]<br>[";
        pool = true;
      }
      // else if (i == r.length - 2)
      // {
      //   let c = pool ? "," : "";
      //   toStr += r[i].toUpperCase()+"]"+c+" or [";
      // }
      else if (r[i] != undefined && r[i] != null)
      {
        toStr += r[i].toUpperCase();
      }
    }
    toStr += "]";
    return toStr;
    //document.getElementById("output").innerHTML = toStr;
}

function checkCanForm(word, letters)
{
  this.word = word+"";
  var f = true;
  var ß = this.word.toUpperCase();
  //console.log("B: " + ß);
  this.letters = letters;
  for (let i = 0; i < this.letters.length; i++)
  {
    if (!ß.includes(this.letters[i]))
    {
      return false;
    }
  }
  //console.log("LETTERS: " + this.letters);
  for (group in this.letters)
  {
    //console.log("GROUP: " + this.letters[group]);
    f &= ß.includes(this.letters[group]);
    ß = ß.replace(this.letters[group], "");
    //console.log("B: " + ß);
    if (!f)
    {
      return false;
    }
  }
  f &= (ß.length == 0);
  return f;
}
