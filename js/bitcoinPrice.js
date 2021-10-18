$(function () {
  $.get(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR,ETH,JPY,CHF,LTC,AUD",
    function (data) {
      $.each(data["RAW"], function (index, value) {
        var spanPrice = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap = $("<span/>")
          .attr("class", index + "mktcapUSD")
          .html(value["USD"]["MKTCAP"] + " USD");
        var $newDiv = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice)
          .append(spanMktcap);
        var spanPrice2 = $("<span/>")
          .attr("id", index + "price")
          .html("1 BTC=");
        var spanMktcap2 = $("<span/>")
          .attr("class", index + "mktcapEUR")
          .html(value["EUR"]["MKTCAP"] + " EUR");
        var $newDiv2 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice2)
          .append(spanMktcap2);
        var spanPrice3 = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap3 = $("<span/>")
          .attr("class", index + "mktcapETH")
          .html(value["ETH"]["MKTCAP"] + " ETH");
        var $newDiv3 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice3)
          .append(spanMktcap3);
        var spanPrice4 = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap4 = $("<span/>")
          .attr("class", index + "mktcapJPY")
          .html(value["JPY"]["MKTCAP"] + " JPY");
        var $newDiv4 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice4)
          .append(spanMktcap4);
        var spanPrice5 = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap5 = $("<span/>")
          .attr("class", index + "mktcapCHF")
          .html(value["CHF"]["MKTCAP"] + " CHF");
        var $newDiv5 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice5)
          .append(spanMktcap5);
        var spanPrice6 = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap6 = $("<span/>")
          .attr("class", index + "mktcapLTC")
          .html(value["LTC"]["MKTCAP"] + " LTC");
        var $newDiv6 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice6)
          .append(spanMktcap6);
        var spanPrice7 = $("<span/>")
          .attr("class", index + "price")
          .html("1 BTC=");
        var spanMktcap7 = $("<span/>")
          .attr("class", index + "mktcapAUD")
          .html(value["AUD"]["MKTCAP"] + " AUD");
        var $newDiv7 = $("<div/>")
          .attr("class", index)
          .addClass("bitcoin-list")
          .append(spanPrice7)
          .append(spanMktcap7);
        $(".bitcoin-pricing").append($newDiv);
        $(".bitcoin-pricing").append($newDiv2);
        $(".bitcoin-pricing").append($newDiv3);
        $(".bitcoin-pricing").append($newDiv4);
        $(".bitcoin-pricing").append($newDiv5);
        $(".bitcoin-pricing").append($newDiv6);
        $(".bitcoin-pricing").append($newDiv7);
      });
    }
  );
});
