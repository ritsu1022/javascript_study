let c = 0;

// 1~12月分のﾙｰﾌﾟ処理
for ( let month = 1; month <= 12; month++ ) {

  // 6~8月は加算処理をｽｷｯﾌﾟ
  if ( month >= 6 && month <= 8) continue;

  c++;
}

console.log(c);