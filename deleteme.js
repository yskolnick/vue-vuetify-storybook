function loadJqueryGrizzly () {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var data = xhr.responseText
      jQueryGrizzly = data.replace(/jQuery/g, 'jQueryGrizzly')
      eval(jQueryGrizzly)
      if (typeof jQuery !== 'undefined') {
        $ = jQuery.noConflict()
      }
    }
  }
  xhr.open(
    'GET',
    'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
    false
  )
  xhr.send(null)
}
var forceJqueryLoad = false
if (typeof jQuery === 'undefined' || forceJqueryLoad) {
  loadJqueryGrizzly()
} else {
  var vernums = jQuery.fn.jquery.split('.')
  if (
    (parseInt(vernums[0]) == 1 && parseInt(vernums[1]) >= 7) ||
    parseInt(vernums[0]) > 1
  ) {
    var jQueryGrizzly = jQuery
  } else {
    loadJqueryGrizzly()
  }
}
var DoublyGlobalCurrency;

  
var catchXHR = true
if (typeof CurrenciesJSON === 'undefined') {
  var CurrenciesJSON = '';
  jQueryGrizzly.get(
    'https://init.grizzlyapps.com/9e32c84f0db4f7b1eb40c32bdb0bdea9',
    function (data) {
      if (data == '') {
        CurrenciesJSON = 'forbidden';
        return false
      }
      CurrenciesJSON = data.replace('Currency', 'DoublyCurrency')
      eval(CurrenciesJSON)
      var spanClass = 'money';

        
var cookieName = '_g1550220947';
      /* JavaScript Cookie v2.0.4 * https://github.com/js-cookie/js-cookie * Copyright 2006, 2015 Klaus Hartl & Fagner Brack * Released under the MIT license */ !(function (
        e
      ) {
        var n = window.Cookies;

          
var t = (window.Cookies = e())
        t.noConflict = function () {
          return (window.Cookies = n), t
        };
      })(function () {
        function e () {
          for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e]
            for (var o in t) n[o] = t[o]
          }
          return n
        }
        function n (t) {
          function o (n, r, i) {
            var c
            if (arguments.length > 1) {
              if (
                ((i = e({ path: '/' }, o.defaults, i)),
                'number' === typeof i.expires)
              ) {
                var s = new Date()
                s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires),
                (i.expires = s)
              }
              try {
                (c = JSON.stringify(r)), /^[\{\[]/.test(c) && (r = c)
              } catch (a) {}
              return (
                (r = t.write
                  ? t.write(r, n)
                  : encodeURIComponent(String(r)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (n = encodeURIComponent(String(n))),
                (n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
                (n = n.replace(/[\(\)]/g, escape)),
                (document.cookie = [
                  n,
                  '=',
                  r,
                  i.expires && '; expires=' + i.expires.toUTCString(),
                  i.path && '; path=' + i.path,
                  i.domain && '; domain=' + i.domain,
                  i.secure ? '; secure' : ''
                ].join(''))
              )
            }
            n || (c = {})
            for (
              var p = document.cookie ? document.cookie.split('; ') : [],
                d = /(%[0-9A-Z]{2})+/g,
                u = 0;
              u < p.length;
              u++
            ) {
              var f = p[u].split('=');

                
var l = f[0].replace(d, decodeURIComponent);

                
var m = f.slice(1).join('=')
              '"' === m.charAt(0) && (m = m.slice(1, -1))
              try {
                if (
                  ((m = t.read
                    ? t.read(m, l)
                    : t(m, l) || m.replace(d, decodeURIComponent)),
                  this.json)
                )
                  {try {
                    m = JSON.parse(m);
                  } catch (a) {}}
                if (n === l) {
                  c = m
                  break;
                }
                n || (c[l] = m)
              } catch (a) {}
            }
            return c
          }
          return (
            (o.get = o.set = o),
            (o.getJSON = function () {
              return o.apply({ json: !0 }, [].slice.call(arguments))
            }),
            (o.defaults = {}),
            (o.remove = function (n, t) {
              o(n, '', e(t, { expires: -1 }))
            }),
            (o.withConverter = n),
            o
          )
        }
        return n(function () {})
      })
      /* Currency tools * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com) * Licensed under the MIT license: * http://www.opensource.org/licenses/mit-license.php */ if (
        typeof DoublyCurrency === 'undefined'
      ) {
        var DoublyCurrency = {}
      }
      DoublyCurrency.cookie = {
        configuration: { path: '/', domain: window.location.hostname },
        name: cookieName,
        write: function (currency) {
          Cookies.set(this.name, btoa(currency), this.configuration)
        },
        read: function () {
          var cookie = Cookies.get(this.name)
          if (typeof cookie === 'undefined') {
            return cookie
          } else {
            return atob(cookie)
          }
        },
        destroy: function () {
          Cookies.remove(this.name, this.configuration)
        }
      }
      DoublyCurrency.moneyFormats = {
        USD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} USD'
        },
        EUR: {
          money_format: '&euro;{{amount}}',
          money_with_currency_format: '&euro;{{amount}} EUR'
        },
        GBP: {
          money_format: '&pound;{{amount}}',
          money_with_currency_format: '&pound;{{amount}} GBP'
        },
        CAD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} CAD'
        },
        ALL: {
          money_format: 'Lek {{amount}}',
          money_with_currency_format: 'Lek {{amount}} ALL'
        },
        DZD: {
          money_format: 'DA {{amount}}',
          money_with_currency_format: 'DA {{amount}} DZD'
        },
        AOA: {
          money_format: 'Kz{{amount}}',
          money_with_currency_format: 'Kz{{amount}} AOA'
        },
        ARS: {
          money_format: '${{amount_with_comma_separator}}',
          money_with_currency_format: '${{amount_with_comma_separator}} ARS'
        },
        AMD: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} AMD'
        },
        AWG: {
          money_format: 'Afl{{amount}}',
          money_with_currency_format: 'Afl{{amount}} AWG'
        },
        AUD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} AUD'
        },
        BBD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} Bds'
        },
        AZN: {
          money_format: '&#8380;{{amount}}',
          money_with_currency_format: '&#8380;{{amount}} AZN'
        },
        BDT: {
          money_format: 'Tk {{amount}}',
          money_with_currency_format: 'Tk {{amount}} BDT'
        },
        BSD: {
          money_format: 'BS${{amount}}',
          money_with_currency_format: 'BS${{amount}} BSD'
        },
        BHD: {
          money_format: '{{amount}} BD',
          money_with_currency_format: '{{amount}} BHD'
        },
        BYN: {
          money_format: 'Br {{amount}}',
          money_with_currency_format: 'Br {{amount}} BYN'
        },
        BZD: {
          money_format: 'BZ${{amount}}',
          money_with_currency_format: 'BZ${{amount}} BZD'
        },
        BTN: {
          money_format: 'Nu {{amount}}',
          money_with_currency_format: 'Nu {{amount}} BTN'
        },
        BAM: {
          money_format: 'KM {{amount_with_comma_separator}}',
          money_with_currency_format: 'KM {{amount_with_comma_separator}} BAM'
        },
        BRL: {
          money_format: 'R$ {{amount_with_comma_separator}}',
          money_with_currency_format: 'R$ {{amount_with_comma_separator}} BRL'
        },
        BOB: {
          money_format: 'Bs{{amount_with_comma_separator}}',
          money_with_currency_format: 'Bs{{amount_with_comma_separator}} BOB'
        },
        BWP: {
          money_format: 'P{{amount}}',
          money_with_currency_format: 'P{{amount}} BWP'
        },
        BND: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} BND'
        },
        BGN: {
          money_format: '{{amount}} лв',
          money_with_currency_format: '{{amount}} лв BGN'
        },
        MMK: {
          money_format: 'K{{amount}}',
          money_with_currency_format: 'K{{amount}} MMK'
        },
        KHR: {
          money_format: 'KHR{{amount}}',
          money_with_currency_format: 'KHR{{amount}}'
        },
        KYD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} KYD'
        },
        XAF: {
          money_format: 'FCFA{{amount}}',
          money_with_currency_format: 'FCFA{{amount}} XAF'
        },
        CLP: {
          money_format: '${{amount_no_decimals}}',
          money_with_currency_format: '${{amount_no_decimals}} CLP'
        },
        CNY: {
          money_format: '&#165;{{amount}}',
          money_with_currency_format: '&#165;{{amount}} CNY'
        },
        COP: {
          money_format: '${{amount_with_comma_separator}}',
          money_with_currency_format: '${{amount_with_comma_separator}} COP'
        },
        CRC: {
          money_format: '&#8353; {{amount_with_comma_separator}}',
          money_with_currency_format:
            '&#8353; {{amount_with_comma_separator}} CRC'
        },
        HRK: {
          money_format: '{{amount_with_comma_separator}} kn',
          money_with_currency_format: '{{amount_with_comma_separator}} kn HRK'
        },
        CZK: {
          money_format: '{{amount_with_comma_separator}} K&#269;',
          money_with_currency_format: '{{amount_with_comma_separator}} K&#269;'
        },
        DKK: {
          money_format: 'kr {{amount_with_comma_separator}}',
          money_with_currency_format: 'kr {{amount_with_comma_separator}} DKK'
        },
        DOP: {
          money_format: 'RD$ {{amount}}',
          money_with_currency_format: 'RD$ {{amount}}'
        },
        XCD: {
          money_format: '${{amount}}',
          money_with_currency_format: 'EC${{amount}}'
        },
        EGP: {
          money_format: 'LE {{amount}}',
          money_with_currency_format: 'LE {{amount}} EGP'
        },
        ETB: {
          money_format: 'Br{{amount}}',
          money_with_currency_format: 'Br{{amount}} ETB'
        },
        XPF: {
          money_format: '{{amount_no_decimals_with_comma_separator}} XPF',
          money_with_currency_format:
            '{{amount_no_decimals_with_comma_separator}} XPF'
        },
        FJD: {
          money_format: '${{amount}}',
          money_with_currency_format: 'FJ${{amount}}'
        },
        GMD: {
          money_format: 'D {{amount}}',
          money_with_currency_format: 'D {{amount}} GMD'
        },
        GHS: {
          money_format: 'GH&#8373;{{amount}}',
          money_with_currency_format: 'GH&#8373;{{amount}}'
        },
        GTQ: {
          money_format: 'Q{{amount}}',
          money_with_currency_format: '{{amount}} GTQ'
        },
        GYD: {
          money_format: 'G${{amount}}',
          money_with_currency_format: '${{amount}} GYD'
        },
        GEL: {
          money_format: '{{amount}} GEL',
          money_with_currency_format: '{{amount}} GEL'
        },
        HNL: {
          money_format: 'L {{amount}}',
          money_with_currency_format: 'L {{amount}} HNL'
        },
        HKD: {
          money_format: 'HK${{amount}}',
          money_with_currency_format: 'HK${{amount}} HKD'
        },
        HUF: {
          money_format: '{{amount_no_decimals_with_comma_separator}}',
          money_with_currency_format:
            '{{amount_no_decimals_with_comma_separator}} Ft'
        },
        ISK: {
          money_format: '{{amount_no_decimals}} kr',
          money_with_currency_format: '{{amount_no_decimals}} kr ISK'
        },
        INR: {
          money_format: '&#8377; {{amount}}',
          money_with_currency_format: '&#8377; {{amount}} INR'
        },
        IDR: {
          money_format: '{{amount_with_comma_separator}} IDR',
          money_with_currency_format: 'Rp {{amount_with_comma_separator}} IDR'
        },
        ILS: {
          money_format: '&#8362;{{amount}} NIS',
          money_with_currency_format: '&#8362;{{amount}} NIS'
        },
        JMD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} JMD'
        },
        JPY: {
          money_format: '&#165;{{amount_no_decimals}}',
          money_with_currency_format: '&#165;{{amount_no_decimals}} JPY'
        },
        JEP: {
          money_format: '&pound;{{amount}}',
          money_with_currency_format: '&pound;{{amount}} JEP'
        },
        JOD: {
          money_format: '{{amount}} JD',
          money_with_currency_format: '{{amount}} JOD'
        },
        KZT: {
          money_format: '{{amount}} KZT',
          money_with_currency_format: '{{amount}} KZT'
        },
        KES: {
          money_format: 'KSh{{amount}}',
          money_with_currency_format: 'KSh{{amount}}'
        },
        KWD: {
          money_format: '{{amount}} KD',
          money_with_currency_format: '{{amount}} KWD'
        },
        KGS: {
          money_format: 'лв{{amount}}',
          money_with_currency_format: 'лв{{amount}}'
        },
        LVL: {
          money_format: 'Ls {{amount}}',
          money_with_currency_format: 'Ls {{amount}} LVL'
        },
        LBP: {
          money_format: 'L.L.{{amount}}',
          money_with_currency_format: 'L.L.{{amount}} LBP'
        },
        LTL: {
          money_format: '{{amount}} Lt',
          money_with_currency_format: '{{amount}} Lt'
        },
        MGA: {
          money_format: 'Ar {{amount}}',
          money_with_currency_format: 'Ar {{amount}} MGA'
        },
        MKD: {
          money_format: 'ден {{amount}}',
          money_with_currency_format: 'ден {{amount}} MKD'
        },
        MOP: {
          money_format: 'MOP${{amount}}',
          money_with_currency_format: 'MOP${{amount}}'
        },
        MVR: {
          money_format: 'Rf{{amount}}',
          money_with_currency_format: 'Rf{{amount}} MVR'
        },
        MXN: {
          money_format: '$ {{amount}}',
          money_with_currency_format: '$ {{amount}} MXN'
        },
        MYR: {
          money_format: 'RM{{amount}}',
          money_with_currency_format: 'RM{{amount}} MYR'
        },
        MUR: {
          money_format: 'Rs {{amount}}',
          money_with_currency_format: 'Rs {{amount}} MUR'
        },
        MDL: {
          money_format: '{{amount}} MDL',
          money_with_currency_format: '{{amount}} MDL'
        },
        MAD: {
          money_format: '{{amount}} dh',
          money_with_currency_format: 'Dh {{amount}} MAD'
        },
        MNT: {
          money_format: '{{amount_no_decimals}} &#8366',
          money_with_currency_format: '{{amount_no_decimals}} MNT'
        },
        MZN: {
          money_format: '{{amount}} Mt',
          money_with_currency_format: 'Mt {{amount}} MZN'
        },
        NAD: {
          money_format: 'N${{amount}}',
          money_with_currency_format: 'N${{amount}} NAD'
        },
        NPR: {
          money_format: 'Rs{{amount}}',
          money_with_currency_format: 'Rs{{amount}} NPR'
        },
        ANG: {
          money_format: '&fnof;{{amount}}',
          money_with_currency_format: '{{amount}} NA&fnof;'
        },
        NZD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} NZD'
        },
        NIO: {
          money_format: 'C${{amount}}',
          money_with_currency_format: 'C${{amount}} NIO'
        },
        NGN: {
          money_format: '&#8358;{{amount}}',
          money_with_currency_format: '&#8358;{{amount}} NGN'
        },
        NOK: {
          money_format: 'kr {{amount_with_comma_separator}}',
          money_with_currency_format: 'kr {{amount_with_comma_separator}} NOK'
        },
        OMR: {
          money_format: '{{amount_with_comma_separator}} OMR',
          money_with_currency_format: '{{amount_with_comma_separator}} OMR'
        },
        PKR: {
          money_format: 'Rs.{{amount}}',
          money_with_currency_format: 'Rs.{{amount}} PKR'
        },
        PGK: {
          money_format: 'K {{amount}}',
          money_with_currency_format: 'K {{amount}} PGK'
        },
        PYG: {
          money_format: 'Gs. {{amount_no_decimals_with_comma_separator}}',
          money_with_currency_format:
            'Gs. {{amount_no_decimals_with_comma_separator}} PYG'
        },
        PEN: {
          money_format: 'S/. {{amount}}',
          money_with_currency_format: 'S/. {{amount}} PEN'
        },
        PHP: {
          money_format: '&#8369;{{amount}}',
          money_with_currency_format: '&#8369;{{amount}} PHP'
        },
        PLN: {
          money_format: '{{amount_with_comma_separator}} zl',
          money_with_currency_format: '{{amount_with_comma_separator}} zl PLN'
        },
        QAR: {
          money_format: 'QAR {{amount_with_comma_separator}}',
          money_with_currency_format: 'QAR {{amount_with_comma_separator}}'
        },
        RON: {
          money_format: '{{amount_with_comma_separator}} lei',
          money_with_currency_format: '{{amount_with_comma_separator}} lei RON'
        },
        RUB: {
          money_format: '&#8381; {{amount_with_comma_separator}}',
          money_with_currency_format:
            '&#8381; {{amount_with_comma_separator}} RUB'
        },
        /* RUB: { money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}", money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB" }, */ RWF: {
          money_format: '{{amount_no_decimals}} RF',
          money_with_currency_format: '{{amount_no_decimals}} RWF'
        },
        WST: {
          money_format: 'WS$ {{amount}}',
          money_with_currency_format: 'WS$ {{amount}} WST'
        },
        SAR: {
          money_format: '{{amount}} SR',
          money_with_currency_format: '{{amount}} SAR'
        },
        STD: {
          money_format: 'Db {{amount}}',
          money_with_currency_format: 'Db {{amount}} STD'
        },
        RSD: {
          money_format: '{{amount}} RSD',
          money_with_currency_format: '{{amount}} RSD'
        },
        SCR: {
          money_format: 'Rs {{amount}}',
          money_with_currency_format: 'Rs {{amount}} SCR'
        },
        SGD: {
          money_format: 'S${{amount}}',
          money_with_currency_format: 'S${{amount}} SGD'
        },
        SYP: {
          money_format: 'S&pound;{{amount}}',
          money_with_currency_format: 'S&pound;{{amount}} SYP'
        },
        ZAR: {
          money_format: 'R {{amount}}',
          money_with_currency_format: 'R {{amount}} ZAR'
        },
        KRW: {
          money_format: '&#8361;{{amount_no_decimals}}',
          money_with_currency_format: '&#8361;{{amount_no_decimals}} KRW'
        },
        LKR: {
          money_format: 'Rs {{amount}}',
          money_with_currency_format: 'Rs {{amount}} LKR'
        },
        SEK: {
          money_format: 'kr {{amount_with_comma_separator}}',
          money_with_currency_format: 'kr {{amount_with_comma_separator}} SEK'
        },
        CHF: {
          money_format: 'SFr. {{amount}}',
          money_with_currency_format: 'SFr. {{amount}} CHF'
        },
        TWD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} TWD'
        },
        THB: {
          money_format: '{{amount}} &#xe3f;',
          money_with_currency_format: '{{amount}} &#xe3f; THB'
        },
        TZS: {
          money_format: '{{amount}} TZS',
          money_with_currency_format: '{{amount}} TZS'
        },
        TTD: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}} TTD'
        },
        TND: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} DT'
        },
        TRY: {
          money_format: '{{amount}} TL',
          money_with_currency_format: '{{amount}} TL'
        },
        UGX: {
          money_format: 'Ush {{amount_no_decimals}}',
          money_with_currency_format: 'Ush {{amount_no_decimals}} UGX'
        },
        UAH: {
          money_format: '₴{{amount}}',
          money_with_currency_format: '₴{{amount}} UAH'
        },
        AED: {
          money_format: '{{amount}} د.إ',
          money_with_currency_format: '{{amount}} د.إ AED'
        },
        UYU: {
          money_format: '${{amount_with_comma_separator}}',
          money_with_currency_format: '${{amount_with_comma_separator}} UYU'
        },
        VUV: {
          money_format: '${{amount}}',
          money_with_currency_format: '${{amount}}VT'
        },
        VEF: {
          money_format: 'Bs. {{amount_with_comma_separator}}',
          money_with_currency_format: 'Bs. {{amount_with_comma_separator}} VEF'
        },
        VND: {
          money_format: '{{amount_no_decimals_with_comma_separator}}&#8363;',
          money_with_currency_format:
            '{{amount_no_decimals_with_comma_separator}} VND'
        },
        BTC: {
          money_format: '{{amount_no_decimals}} BTC',
          money_with_currency_format: '{{amount_no_decimals}} BTC'
        },
        XOF: {
          money_format: 'CFA{{amount}}',
          money_with_currency_format: 'CFA{{amount}} XOF'
        },
        ZMW: {
          money_format: 'K{{amount_no_decimals_with_comma_separator}}',
          money_with_currency_format:
            'ZMW{{amount_no_decimals_with_comma_separator}}'
        },
        AFN: {
          money_format: '&#65;&#102; {{amount}}',
          money_with_currency_format: '&#65;&#102; {{amount}} AFN'
        },
        BMD: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} BMD'
        },
        BIF: {
          money_format: '&#70;&#66;&#117; {{amount}}',
          money_with_currency_format: '&#70;&#66;&#117; {{amount}} BIF'
        },
        CVE: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} CVE'
        },
        KMF: {
          money_format: '&#67;&#70; {{amount}}',
          money_with_currency_format: '&#67;&#70; {{amount}} KMF'
        },
        CDF: {
          money_format: '&#70;&#67; {{amount}}',
          money_with_currency_format: '&#70;&#67; {{amount}} CDF'
        },
        CUC: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} CUC'
        },
        CUP: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} CUP'
        },
        DJF: {
          money_format: '&#70;&#100;&#106; {{amount}}',
          money_with_currency_format: '&#70;&#100;&#106; {{amount}} DJF'
        },
        ERN: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} ERN'
        },
        EEK: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} EEK'
        },
        FKP: {
          money_format: '&#163; {{amount}}',
          money_with_currency_format: '&#163; {{amount}} FKP'
        },
        GIP: {
          money_format: '&#163; {{amount}}',
          money_with_currency_format: '&#163; {{amount}} GIP'
        },
        XAU: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} XAU'
        },
        GGP: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} GGP'
        },
        GNF: {
          money_format: '&#70;&#71; {{amount}}',
          money_with_currency_format: '&#70;&#71; {{amount}} GNF'
        },
        HTG: {
          money_format: '&#71; {{amount}}',
          money_with_currency_format: '&#71; {{amount}} HTG'
        },
        XDR: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} XDR'
        },
        IRR: {
          money_format: '&#65020; {{amount}}',
          money_with_currency_format: '&#65020; {{amount}} IRR'
        },
        IQD: {
          money_format: '&#1593;.&#1583; {{amount}}',
          money_with_currency_format: '&#1593;.&#1583; {{amount}} IQD'
        },
        IMP: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} IMP'
        },
        LAK: {
          money_format: '&#8365; {{amount}}',
          money_with_currency_format: '&#8365; {{amount}} LAK'
        },
        LSL: {
          money_format: '&#76; {{amount}}',
          money_with_currency_format: '&#76; {{amount}} LSL'
        },
        LRD: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} LRD'
        },
        LYD: {
          money_format: '&#1604;.&#1583; {{amount}}',
          money_with_currency_format: '&#1604;.&#1583; {{amount}} LYD'
        },
        MWK: {
          money_format: '&#77;&#75; {{amount}}',
          money_with_currency_format: '&#77;&#75; {{amount}} MWK'
        },
        MRO: {
          money_format: '&#85;&#77; {{amount}}',
          money_with_currency_format: '&#85;&#77; {{amount}} MRO'
        },
        KPW: {
          money_format: '&#8361; {{amount}}',
          money_with_currency_format: '&#8361; {{amount}} KPW'
        },
        XPD: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} XPD'
        },
        PAB: {
          money_format: '&#66;&#47;&#46; {{amount}}',
          money_with_currency_format: '&#66;&#47;&#46; {{amount}} PAB'
        },
        XPT: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} XPT'
        },
        SHP: {
          money_format: '&#163; {{amount}}',
          money_with_currency_format: '&#163; {{amount}} SHP'
        },
        SVC: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} SVC'
        },
        SPL: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} SPL'
        },
        SLL: {
          money_format: '&#76;&#101; {{amount}}',
          money_with_currency_format: '&#76;&#101; {{amount}} SLL'
        },
        XAG: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} XAG'
        },
        SKK: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} SKK'
        },
        SBD: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} SBD'
        },
        SOS: {
          money_format: '&#83; {{amount}}',
          money_with_currency_format: '&#83; {{amount}} SOS'
        },
        SDG: {
          money_format: '&#163; {{amount}}',
          money_with_currency_format: '&#163; {{amount}} SDG'
        },
        SRD: {
          money_format: '&#36; {{amount}}',
          money_with_currency_format: '&#36; {{amount}} SRD'
        },
        SZL: {
          money_format: '&#76; {{amount}}',
          money_with_currency_format: '&#76; {{amount}} SZL'
        },
        TJS: {
          money_format: '&#84;&#74;&#83; {{amount}}',
          money_with_currency_format: '&#84;&#74;&#83; {{amount}} TJS'
        },
        TOP: {
          money_format: '&#84;&#36; {{amount}}',
          money_with_currency_format: '&#84;&#36; {{amount}} TOP'
        },
        TMT: {
          money_format: '&#109; {{amount}}',
          money_with_currency_format: '&#109; {{amount}} TMT'
        },
        TVD: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} TVD'
        },
        UZS: {
          money_format: '&#1083;&#1074; {{amount}}',
          money_with_currency_format: '&#1083;&#1074; {{amount}} UZS'
        },
        YER: {
          money_format: '&#65020; {{amount}}',
          money_with_currency_format: '&#65020; {{amount}} YER'
        },
        ZWD: {
          money_format: '{{amount}}',
          money_with_currency_format: '{{amount}} ZWD'
        }
      }
      DoublyCurrency.formatMoney = function (
        cents,
        format,
        isShopCurrency,
        hasSup
      ) {
        function defaultOption (opt, def) {
          if (typeof opt === 'undefined') {
            return def
          } else {
            return opt
          }
        }
        function formatWithDelimiters (number, precision, thousands, decimal) {
          precision = defaultOption(precision, 2)
          thousands = defaultOption(thousands, ',')
          decimal = defaultOption(decimal, '.')
          if (isNaN(number) || number == null) {
            return 0
          }
          number = (number / 100).toFixed(precision)
          var parts = number.split('.');

            
var dollars = parts[0].replace(
              /(\d)(?=(\d\d\d)+(?!\d))/g,
              "$1" + thousands
            );

            
var cents = parts[1] ? decimal + parts[1] : '';
          if (hasSup) {
            return dollars + '<sup>' + cents + '</sup>';
          } else {
            return dollars + cents
          }
        }
        if (typeof cents === 'string') {
          cents = cents.replace('.', '')
        }
        var value = '';

          
var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;

          
var formatString = format || "${{amount}}";

          
var decimals = 2
        if (
          (!isShopCurrency &&
            (DoublyCurrency.currentCurrency == 'KWD' ||
              DoublyCurrency.currentCurrency == 'BHD' ||
              DoublyCurrency.currentCurrency == 'JOD' ||
              DoublyCurrency.currentCurrency == 'OMR')) ||
          (isShopCurrency &&
            (shopCurrency == 'KWD' ||
              shopCurrency == 'BHD' ||
              shopCurrency == 'JOD' ||
              shopCurrency == 'OMR'))
        ) {
          decimals = 3
        }
        if (removeDecimals) {
          decimals = 0
        }
        if (
          (!isShopCurrency && DoublyCurrency.currentCurrency == 'BTC') ||
          (isShopCurrency && shopCurrency == 'BTC')
        ) {
          decimals = 8
        }
        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, decimals)
            if (
              roundDecimals &&
              !isShopCurrency &&
              this.currentCurrency != shopCurrency &&
              this.currentCurrency != 'BTC' &&
              value != 0 &&
              value.toString().indexOf('.') !== -1
            ) {
              value =
                value.substr(0, value.toString().indexOf('.') + 1) + roundTo
              if (
                DoublyCurrency.currentCurrency == 'KWD' ||
                DoublyCurrency.currentCurrency == 'BHD' ||
                DoublyCurrency.currentCurrency == 'JOD' ||
                DoublyCurrency.currentCurrency == 'OMR'
              ) {
                value += '0';
              }
              if (hasSup) {
                value += '</sup>';
              }
            }
            break
          case 'amount_with_comma_separator':
          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, decimals, '.', ',')
            if (
              roundDecimals &&
              !isShopCurrency &&
              this.currentCurrency != shopCurrency &&
              this.currentCurrency != 'BTC' &&
              value.toString().replace(',', '.') != 0 &&
              value.toString().indexOf(',') !== -1
            ) {
              value =
                value.substr(0, value.toString().indexOf(',') + 1) + roundTo
              if (
                DoublyCurrency.currentCurrency == 'KWD' ||
                DoublyCurrency.currentCurrency == 'BHD' ||
                DoublyCurrency.currentCurrency == 'JOD' ||
                DoublyCurrency.currentCurrency == 'OMR'
              ) {
                value += '0';
              }
              if (hasSup) {
                value += '</sup>';
              }
            }
        }
        if (!isNaN(cents)) {
          return formatString.replace(placeholderRegex, value)
        } else {
          return '';
        }
      }
      DoublyCurrency.currentCurrency = '';
      DoublyCurrency.format = 'money_with_currency_format';
      DoublyCurrency.getPriceOnly = function (priceHtml, oldFormat) {
        var regex = /\{\{\s*(\w+)\s*\}\}/
        var array = oldFormat
          .replace(regex, ' ')
          .replace(/ +/g, ' ')
          .split(' ')
        /* remove $ or USD from price, without removing any html tags or dots (.) or commas (,) */ jQueryGrizzly(
          array
        ).each(function (index, value) {
          priceHtml = priceHtml.replace(
            jQueryGrizzly('<div/>')
              .html(value)
              .text(),
            ''
          )
        })
        /* get decimal point or comma */ decimal = '.';
        if (oldFormat.indexOf('comma') !== -1) {
          decimal = ',';
        }
        /* check for and remove <sup></sup> html tags */ if (
          priceHtml.indexOf(decimal) === -1 &&
          priceHtml.indexOf('<sup>') !== -1
        ) {
          priceHtml = priceHtml.replace('<sup>', decimal).replace('</sup>', '')
        }
        return priceHtml
      };
      DoublyCurrency.convertAll = function (newCurrency, selector) {
        var isShopCurrency = false
        if (selector == undefined) {
          this.currentCurrency = newCurrency
          this.cookie.write(newCurrency)
        }
        if (selector !== undefined && selector == '.price-on-hover') {
          var dataCurrencyShop = jQueryGrizzly(selector)
            .closest('.' + spanClass)
            .attr('doubly-currency-' + shopCurrency)
          jQueryGrizzly(selector).attr(
            'doubly-currency-' + shopCurrency,
            dataCurrencyShop
          )
          isShopCurrency = true
        }
        jQueryGrizzly(selector || 'span.' + spanClass).each(function () {
          /* If the amount has already been converted, we leave it alone. */ if (
            jQueryGrizzly(this).attr('doubly-currency') === newCurrency
          )
            {return;}
          /* If we are converting to a currency that we have saved, we will use the saved amount. */ if (
            jQueryGrizzly(this).attr('doubly-currency-' + newCurrency)
          ) {
            var newFormat =
              DoublyCurrency.moneyFormats[newCurrency][DoublyCurrency.format] ||
              '{{amount}}';
            if (newCurrency !== 'BTC') {
              cents = parseInt(
                jQueryGrizzly(this).attr('doubly-currency-' + newCurrency),
                10
              )
            } else {
              cents = Number(
                jQueryGrizzly(this).attr('doubly-currency-' + newCurrency)
              )
            }
            var hasSup = false
            if (
              jQueryGrizzly(this)
                .html()
                .indexOf('<sup>') !== -1
            ) {
              hasSup = true
            }
            var newFormattedAmount = DoublyCurrency.formatMoney(
              cents,
              newFormat,
              isShopCurrency,
              hasSup
            )
            jQueryGrizzly(this).html(newFormattedAmount)
          } else {
            /* convert to Y for the first time */ var cents = 0;

              
var shopPrice = 0;

              
var oldFormat =
                DoublyCurrency.moneyFormats[shopCurrency][
                  DoublyCurrency.format
                ] || "{{amount}}";

              
var newFormat =
                DoublyCurrency.moneyFormats[newCurrency][
                  DoublyCurrency.format
                ] || '{{amount}}';
            if (jQueryGrizzly(this).attr('doubly-currency-' + shopCurrency)) {
              shopPrice = jQueryGrizzly(this).attr(
                'doubly-currency-' + shopCurrency
              )
            } else {
              var priceHtml = jQueryGrizzly(this).html()
              priceHtml = DoublyCurrency.getPriceOnly(priceHtml, oldFormat)
              if (priceHtml.indexOf(decimal) == -1) {
                shopPrice =
                  parseInt(
                    jQueryGrizzly(this)
                      .html()
                      .replace(/[^0-9]/g, ''),
                    10
                  ) * 100
              } else if (
                shopCurrency === 'KWD' ||
                shopCurrency === 'JOD' ||
                shopCurrency == 'BHD' ||
                shopCurrency == 'OMR'
              ) {
                shopPrice =
                  parseInt(
                    jQueryGrizzly(this)
                      .html()
                      .replace(/[^0-9]/g, ''),
                    10
                  ) / 10
              } else {
                shopPrice = parseInt(
                  jQueryGrizzly(this)
                    .html()
                    .replace(/[^0-9]/g, ''),
                  10
                )
              }
              jQueryGrizzly(this).attr(
                'doubly-currency-' + shopCurrency,
                shopPrice
              )
            }
            if (shopCurrency != newCurrency) {
              cents = DoublyCurrency.convert(
                shopPrice,
                shopCurrency,
                newCurrency
              )
            } else {
              cents = shopPrice
            }
            jQueryGrizzly(this).attr('doubly-currency-' + newCurrency, cents)
            var hasSup = false
            if (
              jQueryGrizzly(this)
                .html()
                .indexOf('<sup>') !== -1
            ) {
              hasSup = true
            }
            var newFormattedAmount = DoublyCurrency.formatMoney(
              cents,
              newFormat,
              isShopCurrency,
              hasSup
            )
            jQueryGrizzly(this).html(newFormattedAmount)
          }
          /* We record the new currency locally. */ jQueryGrizzly(this).attr(
            'doubly-currency',
            newCurrency
          )
        })
      };
      jQueryGrizzly('head').append(
        '<style>.layered-currency-switcher{width:auto;float:right;padding:0 0 0 50px;margin:0px;}.layered-currency-switcher li{display:block;float:left;font-size:15px;margin:0px;}.layered-currency-switcher li button.currency-switcher-btn{width:auto;height:auto;margin-bottom:0px;background:#fff;font-family:Arial!important;line-height:18px;border:1px solid #dadada;border-radius:25px;color:#9a9a9a;float:left;font-weight:700;margin-left:-46px;min-width:90px;position:relative;text-align:center;text-decoration:none;padding:10px 11px 10px 49px}.price-on-hover,.price-on-hover-wrapper{font-size:15px!important;line-height:25px!important}.layered-currency-switcher li button.currency-switcher-btn:focus{outline:0;-webkit-outline:none;-moz-outline:none;-o-outline:none}.layered-currency-switcher li button.currency-switcher-btn:hover{background:#ddf6cf;border-color:#a9d092;color:#89b171}.layered-currency-switcher li button.currency-switcher-btn span{display:none}.layered-currency-switcher li button.currency-switcher-btn:first-child{border-radius:25px}.layered-currency-switcher li button.currency-switcher-btn.selected{background:#de4c39;border-color:#de4c39;color:#fff;z-index:99;padding-left:23px!important;padding-right:23px!important}.layered-currency-switcher li button.currency-switcher-btn.selected span{display:inline-block}.doubly,.money{position:relative; font-weight:inherit !important; font-size:inherit !important;text-decoration:inherit !important;}.price-on-hover-wrapper{position:absolute;left:-50%;text-align:center;width:200%;top:110%;z-index:100000000}.price-on-hover{background:#333;border-color:#FFF!important;padding:2px 5px 3px;font-weight:400;border-radius:5px;font-family:Helvetica Neue,Arial;color:#fff;border:0}.price-on-hover:after{content:"";position:absolute;left:50%;margin-left:-4px;margin-top:-2px;width:0;height:0;border-bottom:solid 4px #333;border-left:solid 4px transparent;border-right:solid 4px transparent}.doubly-message{margin:5px 0}.doubly-wrapper{float:right}.doubly-float{position:fixed;bottom:10px;left:10px;right:auto;z-index:100000;}select.currency-switcher{margin:0px; position:relative; top:auto;}</style>'
      )
      /* jQueryGrizzly Nice Select - v1.0 http://hernansartorio.github.io/jquery-nice-select Made by Hernán Sartorio */ !(function (
        e
      ) {
        e.fn.niceSelect = function () {
          this.each(function () {
            var s = e(this)
            if (
              !s.next().hasClass('doubly-nice-select') &&
              !s.hasClass('doubly-nice-select')
            ) {
              s.after(
                '<div class="doubly-nice-select ' +
                  (s.attr('class') || '') +
                  (s.attr('disabled') ? 'disabled' : '" tabindex="0') +
                  '"><span class="current notranslate"></span><ul class="list"></ul></div>'
              )
              var t = s.next();

                
var n = s.find("option");

                
var a = s.find('option:selected')
              t
                .find('.current')
                .html(
                  '<span class="flags flags-' +
                    a.data('country') +
                    '"></span> &nbsp;' +
                    a.data('display') || a.text()
                ),
              n.each(function () {
                var s = e(this).data('display')
                  t.find('ul').append(
                  '<li class="option notranslate ' +
                      (e(this).is(':selected') ? 'selected' : '') +
                      '" data-value="' +
                      e(this).val() +
                      '" data-country="' +
                      e(this).data('country') +
                      (s
                        ? '" data-currency-symbol="' +
                          e(this).data('currency-symbol') +
                          '" data-display="' +
                          s
                        : '') +
                      '"><span class="flags flags-' +
                      e(this).data('country') +
                      '"></span> &nbsp;' +
                      e(this).text() +
                      '</li>'
                )
                })
            }
          }),
          e(document).off('.nice_select'),
          e(document).on(
            'click.nice_select',
            '.doubly-nice-select.doubly-nice-select',
            function (s) {
              var t = e(this)
                e('.doubly-nice-select')
                .not(t)
                .removeClass('open'),
              t.toggleClass('open'),
              t.hasClass('open')
                ? (t.find('.option'),
                t.find('.focus').removeClass('focus'),
                t.find('.selected').addClass('focus'))
                : t.focus()
              }
          ),
          e(document).on('click.nice_select', function (s) {
            e(s.target).closest(".doubly-nice-select").length === 0 &&
                e('.doubly-nice-select')
                  .removeClass('open')
                  .find('.option')
            }),
          e(document).on(
            'click.nice_select',
            '.doubly-nice-select .option',
            function (s) {
              var t = e(this)
                e('.doubly-nice-select').each(function () {
                var s = e(this).find(
                    '.option[data-value="' + t.data('value') + '"]'
                  );

                    
var n = s.closest('.doubly-nice-select')
                  n.find('.selected').removeClass('selected'),
                s.addClass('selected')
                  var a =
                    '<span class="flags flags-' +
                      s.data('country') +
                      '"></span> &nbsp;' +
                      s.data('display') || s.text()
                  n.find('.current').html(a),
                n
                  .prev('select')
                  .val(s.data('value'))
                  .trigger('change')
                })
              }
          ),
          e(document).on(
            'keydown.nice_select',
            '.doubly-nice-select',
            function (s) {
              var t = e(this);

                  
var n = e(t.find('.focus') || t.find('.list .option.selected'))
                if (s.keyCode == 32 || s.keyCode == 13)
                {return (
                    t.hasClass("open")
                      ? n.trigger("click")
                      : t.trigger("click"),
                    !1
                  );}
              if (s.keyCode == 40)
                {return (
                    t.hasClass("open")
                      ? n.next().length > 0 &&
                        (t.find(".focus").removeClass("focus"),
                        n.next().addClass("focus"))
                      : t.trigger("click"),
                    !1
                  );}
              if (s.keyCode == 38)
                {return (
                    t.hasClass("open")
                      ? n.prev().length > 0 &&
                        (t.find(".focus").removeClass("focus"),
                        n.prev().addClass("focus"))
                      : t.trigger("click"),
                    !1
                  );}
              if (s.keyCode == 27) t.hasClass('open') && t.trigger('click')
                else if (s.keyCode == 9 && t.hasClass('open')) return !1
              }
          )
        };
      })(jQueryGrizzly)
      jQueryGrizzly('head').append(
        '<style>select.currency-switcher{display:none}.doubly-nice-select{-webkit-tap-highlight-color:transparent;background-color:#fff;border-radius:5px;border:1px solid #e8e8e8;box-sizing:border-box;cursor:pointer;display:block;float:left;font-family:"Helvetica Neue",Arial;font-size:14px;font-weight:400;height:42px;line-height:40px;outline:0;padding-left:12px;padding-right:30px;position:relative;text-align:left!important;transition:all .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;width:auto}.doubly-nice-select:hover{border-color:#dbdbdb}.doubly-nice-select.open,.doubly-nice-select:active,.doubly-nice-select:focus{border-color:#88bfff}.doubly-nice-select:after{border-bottom:2px solid #999;border-right:2px solid #999;content:"";display:block;height:5px;box-sizing:content-box;pointer-events:none;position:absolute;right:14px;top:16px;-webkit-transform-origin:66% 66%;transform-origin:66% 66%;-webkit-transform:rotate(45deg);transform:rotate(45deg);transition:all .15s ease-in-out;width:5px}.doubly-nice-select.open:after{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.doubly-nice-select.open .list{opacity:1;pointer-events:auto;-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0); z-index:1000000 !important;}.doubly-nice-select.disabled{border-color:#ededed;color:#999;pointer-events:none}.doubly-nice-select.disabled:after{border-color:#ccc}.doubly-nice-select.wide{width:100%}.doubly-nice-select.wide .list{left:0!important;right:0!important}.doubly-nice-select.right{float:right}.doubly-nice-select.right .list{left:auto;right:0}.doubly-nice-select.small{font-size:12px;height:36px;line-height:34px}.doubly-nice-select.small:after{height:4px;width:4px}.flags-Afghanistan,.flags-Albania,.flags-Algeria,.flags-Andorra,.flags-Angola,.flags-Antigua-and-Barbuda,.flags-Argentina,.flags-Armenia,.flags-Aruba,.flags-Australia,.flags-Austria,.flags-Azerbaijan,.flags-Bahamas,.flags-Bahrain,.flags-Bangladesh,.flags-Barbados,.flags-Belarus,.flags-Belgium,.flags-Belize,.flags-Benin,.flags-Bermuda,.flags-Bhutan,.flags-Bitcoin,.flags-Bolivia,.flags-Bosnia-and-Herzegovina,.flags-Botswana,.flags-Brazil,.flags-Brunei,.flags-Bulgaria,.flags-Burkina-Faso,.flags-Burundi,.flags-Cambodia,.flags-Cameroon,.flags-Canada,.flags-Cape-Verde,.flags-Cayman-Islands,.flags-Central-African-Republic,.flags-Chad,.flags-Chile,.flags-China,.flags-Colombia,.flags-Comoros,.flags-Congo-Democratic,.flags-Congo-Republic,.flags-Costa-Rica,.flags-Cote-d_Ivoire,.flags-Croatia,.flags-Cuba,.flags-Curacao,.flags-Cyprus,.flags-Czech-Republic,.flags-Denmark,.flags-Djibouti,.flags-Dominica,.flags-Dominican-Republic,.flags-East-Timor,.flags-Ecuador,.flags-Egypt,.flags-El-Salvador,.flags-Equatorial-Guinea,.flags-Eritrea,.flags-Estonia,.flags-Ethiopia,.flags-European-Union,.flags-Falkland-Islands,.flags-Fiji,.flags-Finland,.flags-France,.flags-Gabon,.flags-Gambia,.flags-Georgia,.flags-Germany,.flags-Ghana,.flags-Gibraltar,.flags-Grecee,.flags-Grenada,.flags-Guatemala,.flags-Guernsey,.flags-Guinea,.flags-Guinea-Bissau,.flags-Guyana,.flags-Haiti,.flags-Honduras,.flags-Hong-Kong,.flags-Hungary,.flags-IMF,.flags-Iceland,.flags-India,.flags-Indonesia,.flags-Iran,.flags-Iraq,.flags-Ireland,.flags-Isle-of-Man,.flags-Israel,.flags-Italy,.flags-Jamaica,.flags-Japan,.flags-Jersey,.flags-Jordan,.flags-Kazakhstan,.flags-Kenya,.flags-Korea-North,.flags-Korea-South,.flags-Kosovo,.flags-Kuwait,.flags-Kyrgyzstan,.flags-Laos,.flags-Latvia,.flags-Lebanon,.flags-Lesotho,.flags-Liberia,.flags-Libya,.flags-Liechtenstein,.flags-Lithuania,.flags-Luxembourg,.flags-Macao,.flags-Macedonia,.flags-Madagascar,.flags-Malawi,.flags-Malaysia,.flags-Maldives,.flags-Mali,.flags-Malta,.flags-Marshall-Islands,.flags-Mauritania,.flags-Mauritius,.flags-Mexico,.flags-Micronesia-_Federated_,.flags-Moldova,.flags-Monaco,.flags-Mongolia,.flags-Montenegro,.flags-Morocco,.flags-Mozambique,.flags-Myanmar,.flags-Namibia,.flags-Nauru,.flags-Nepal,.flags-Netherlands,.flags-New-Zealand,.flags-Nicaragua,.flags-Niger,.flags-Nigeria,.flags-Norway,.flags-Oman,.flags-Pakistan,.flags-Palau,.flags-Panama,.flags-Papua-New-Guinea,.flags-Paraguay,.flags-Peru,.flags-Philippines,.flags-Poland,.flags-Portugal,.flags-Qatar,.flags-Romania,.flags-Russia,.flags-Rwanda,.flags-Saint-Helena,.flags-Saint-Kitts-and-Nevis,.flags-Saint-Lucia,.flags-Saint-Vincent-and-the-Grenadines,.flags-Samoa,.flags-San-Marino,.flags-Sao-Tome-and-Principe,.flags-Saudi-Arabia,.flags-Seborga,.flags-Senegal,.flags-Serbia,.flags-Seychelles,.flags-Sierra-Leone,.flags-Singapore,.flags-Slovakia,.flags-Slovenia,.flags-Solomon-Islands,.flags-Somalia,.flags-South-Africa,.flags-South-Sudan,.flags-Spain,.flags-Sri-Lanka,.flags-Sudan,.flags-Suriname,.flags-Swaziland,.flags-Sweden,.flags-Switzerland,.flags-Syria,.flags-Taiwan,.flags-Tajikistan,.flags-Tanzania,.flags-Thailand,.flags-Togo,.flags-Tonga,.flags-Trinidad-and-Tobago,.flags-Tunisia,.flags-Turkey,.flags-Turkmenistan,.flags-Tuvalu,.flags-Uganda,.flags-Ukraine,.flags-United-Arab-Emirates,.flags-United-Kingdom,.flags-United-States,.flags-Uruguay,.flags-Uzbekistan,.flags-Vanuatu,.flags-Vatican-City,.flags-Venezuela,.flags-Vietnam,.flags-Wallis-and-Futuna,.flags-XAG,.flags-XAU,.flags-XPT,.flags-Yemen,.flags-Zambia,.flags-Zimbabwe{width:30px;height:20px}.doubly-nice-select.small .option{line-height:34px;min-height:34px}.doubly-nice-select .list{background-color:#fff;border-radius:5px;box-shadow:0 0 0 1px rgba(68,68,68,.11);box-sizing:border-box;margin:4px 0 0!important;opacity:0;overflow:scroll;overflow-x:hidden;padding:0;pointer-events:none;position:absolute;top:100%;max-height:260px;left:0;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(.75) translateY(-21px);transform:scale(.75) translateY(-21px);transition:all .2s cubic-bezier(.5,0,0,1.25),opacity .15s ease-out;z-index:100000}.doubly-nice-select .current img,.doubly-nice-select .option img{vertical-align:top;padding-top:10px}.doubly-nice-select .list:hover .option:not(:hover){background-color:transparent!important}.doubly-nice-select .option{font-size:13px !important;float:none!important;text-align:left !important;margin:0px !important;font-family:Helvetica Neue,Arial !important;letter-spacing:normal;text-transform:none;display:block!important;cursor:pointer;font-weight:400;line-height:40px!important;list-style:none;min-height:40px;min-width:55px;margin-bottom:0;outline:0;padding-left:18px!important;padding-right:52px!important;text-align:left;transition:all .2s}.doubly-nice-select .option.focus,.doubly-nice-select .option.selected.focus,.doubly-nice-select .option:hover{background-color:#f6f6f6}.doubly-nice-select .option.selected{font-weight:700}.doubly-nice-select .current img{line-height:45px}.doubly-nice-select.slim{padding:0 18px 0 0;height:20px;line-height:20px;border:0;background:0 0!important}.doubly-nice-select.slim .current .flags{margin-top:0 !important}.doubly-nice-select.slim:after{right:4px;top:6px}.flags{background-image:url(https://cdn.shopify.com/s/files/1/0414/0681/t/42/assets/currency-flags.png?17777010653102962661);background-repeat:no-repeat;display:block;margin:10px 4px 0 0 !important;float:left}.flags-Zimbabwe{background-position:-5px -5px}.flags-Zambia{background-position:-45px -5px}.flags-Yemen{background-position:-85px -5px}.flags-Vietnam{background-position:-125px -5px}.flags-Venezuela{background-position:-165px -5px}.flags-Vatican-City{background-position:-205px -5px}.flags-Vanuatu{background-position:-245px -5px}.flags-Uzbekistan{background-position:-285px -5px}.flags-Uruguay{background-position:-325px -5px}.flags-United-States{background-position:-365px -5px}.flags-United-Kingdom{background-position:-405px -5px}.flags-United-Arab-Emirates{background-position:-445px -5px}.flags-Ukraine{background-position:-5px -35px}.flags-Uganda{background-position:-45px -35px}.flags-Tuvalu{background-position:-85px -35px}.flags-Turkmenistan{background-position:-125px -35px}.flags-Turkey{background-position:-165px -35px}.flags-Tunisia{background-position:-205px -35px}.flags-Trinidad-and-Tobago{background-position:-245px -35px}.flags-Tonga{background-position:-285px -35px}.flags-Togo{background-position:-325px -35px}.flags-Thailand{background-position:-365px -35px}.flags-Tanzania{background-position:-405px -35px}.flags-Tajikistan{background-position:-445px -35px}.flags-Taiwan{background-position:-5px -65px}.flags-Syria{background-position:-45px -65px}.flags-Switzerland{background-position:-85px -65px}.flags-Sweden{background-position:-125px -65px}.flags-Swaziland{background-position:-165px -65px}.flags-Suriname{background-position:-205px -65px}.flags-Sudan{background-position:-245px -65px}.flags-Sri-Lanka{background-position:-285px -65px}.flags-Spain{background-position:-325px -65px}.flags-South-Sudan{background-position:-365px -65px}.flags-South-Africa{background-position:-405px -65px}.flags-Somalia{background-position:-445px -65px}.flags-Solomon-Islands{background-position:-5px -95px}.flags-Slovenia{background-position:-45px -95px}.flags-Slovakia{background-position:-85px -95px}.flags-Singapore{background-position:-125px -95px}.flags-Sierra-Leone{background-position:-165px -95px}.flags-Seychelles{background-position:-205px -95px}.flags-Serbia{background-position:-245px -95px}.flags-Senegal{background-position:-285px -95px}.flags-Saudi-Arabia{background-position:-325px -95px}.flags-Sao-Tome-and-Principe{background-position:-365px -95px}.flags-San-Marino{background-position:-405px -95px}.flags-Samoa{background-position:-445px -95px}.flags-Saint-Vincent-and-the-Grenadines{background-position:-5px -125px}.flags-Saint-Lucia{background-position:-45px -125px}.flags-Saint-Kitts-and-Nevis{background-position:-85px -125px}.flags-Rwanda{background-position:-125px -125px}.flags-Russia{background-position:-165px -125px}.flags-Romania{background-position:-205px -125px}.flags-Qatar{background-position:-245px -125px}.flags-Portugal{background-position:-285px -125px}.flags-Poland{background-position:-325px -125px}.flags-Philippines{background-position:-365px -125px}.flags-Peru{background-position:-405px -125px}.flags-Paraguay{background-position:-445px -125px}.flags-Papua-New-Guinea{background-position:-5px -155px}.flags-Panama{background-position:-45px -155px}.flags-Palau{background-position:-85px -155px}.flags-Pakistan{background-position:-125px -155px}.flags-Oman{background-position:-165px -155px}.flags-Norway{background-position:-205px -155px}.flags-Nigeria{background-position:-245px -155px}.flags-Niger{background-position:-285px -155px}.flags-Nicaragua{background-position:-325px -155px}.flags-New-Zealand{background-position:-365px -155px}.flags-Netherlands{background-position:-405px -155px}.flags-Nepal{background-position:-445px -155px}.flags-Nauru{background-position:-5px -185px}.flags-Namibia{background-position:-45px -185px}.flags-Myanmar{background-position:-85px -185px}.flags-Mozambique{background-position:-125px -185px}.flags-Morocco{background-position:-165px -185px}.flags-Montenegro{background-position:-205px -185px}.flags-Mongolia{background-position:-245px -185px}.flags-Monaco{background-position:-285px -185px}.flags-Moldova{background-position:-325px -185px}.flags-Micronesia-_Federated_{background-position:-365px -185px}.flags-Mexico{background-position:-405px -185px}.flags-Mauritius{background-position:-445px -185px}.flags-Mauritania{background-position:-5px -215px}.flags-Marshall-Islands{background-position:-45px -215px}.flags-Malta{background-position:-85px -215px}.flags-Mali{background-position:-125px -215px}.flags-Maldives{background-position:-165px -215px}.flags-Malaysia{background-position:-205px -215px}.flags-Malawi{background-position:-245px -215px}.flags-Madagascar{background-position:-285px -215px}.flags-Macedonia{background-position:-325px -215px}.flags-Luxembourg{background-position:-365px -215px}.flags-Lithuania{background-position:-405px -215px}.flags-Liechtenstein{background-position:-445px -215px}.flags-Libya{background-position:-5px -245px}.flags-Liberia{background-position:-45px -245px}.flags-Lesotho{background-position:-85px -245px}.flags-Lebanon{background-position:-125px -245px}.flags-Latvia{background-position:-165px -245px}.flags-Laos{background-position:-205px -245px}.flags-Kyrgyzstan{background-position:-245px -245px}.flags-Kuwait{background-position:-285px -245px}.flags-Kosovo{background-position:-325px -245px}.flags-Korea-South{background-position:-365px -245px}.flags-Korea-North{background-position:-405px -245px}.flags-Kiribati{width:30px;height:20px;background-position:-445px -245px}.flags-Kenya{background-position:-5px -275px}.flags-Kazakhstan{background-position:-45px -275px}.flags-Jordan{background-position:-85px -275px}.flags-Japan{background-position:-125px -275px}.flags-Jamaica{background-position:-165px -275px}.flags-Italy{background-position:-205px -275px}.flags-Israel{background-position:-245px -275px}.flags-Ireland{background-position:-285px -275px}.flags-Iraq{background-position:-325px -275px}.flags-Iran{background-position:-365px -275px}.flags-Indonesia{background-position:-405px -275px}.flags-India{background-position:-445px -275px}.flags-Iceland{background-position:-5px -305px}.flags-Hungary{background-position:-45px -305px}.flags-Honduras{background-position:-85px -305px}.flags-Haiti{background-position:-125px -305px}.flags-Guyana{background-position:-165px -305px}.flags-Guinea{background-position:-205px -305px}.flags-Guinea-Bissau{background-position:-245px -305px}.flags-Guatemala{background-position:-285px -305px}.flags-Grenada{background-position:-325px -305px}.flags-Grecee{background-position:-365px -305px}.flags-Ghana{background-position:-405px -305px}.flags-Germany{background-position:-445px -305px}.flags-Georgia{background-position:-5px -335px}.flags-Gambia{background-position:-45px -335px}.flags-Gabon{background-position:-85px -335px}.flags-France{background-position:-125px -335px}.flags-Finland{background-position:-165px -335px}.flags-Fiji{background-position:-205px -335px}.flags-Ethiopia{background-position:-245px -335px}.flags-Estonia{background-position:-285px -335px}.flags-Eritrea{background-position:-325px -335px}.flags-Equatorial-Guinea{background-position:-365px -335px}.flags-El-Salvador{background-position:-405px -335px}.flags-Egypt{background-position:-445px -335px}.flags-Ecuador{background-position:-5px -365px}.flags-East-Timor{background-position:-45px -365px}.flags-Dominican-Republic{background-position:-85px -365px}.flags-Dominica{background-position:-125px -365px}.flags-Djibouti{background-position:-165px -365px}.flags-Denmark{background-position:-205px -365px}.flags-Czech-Republic{background-position:-245px -365px}.flags-Cyprus{background-position:-285px -365px}.flags-Cuba{background-position:-325px -365px}.flags-Croatia{background-position:-365px -365px}.flags-Cote-d_Ivoire{background-position:-405px -365px}.flags-Costa-Rica{background-position:-445px -365px}.flags-Congo-Republic{background-position:-5px -395px}.flags-Congo-Democratic{background-position:-45px -395px}.flags-Comoros{background-position:-85px -395px}.flags-Colombia{background-position:-125px -395px}.flags-China{background-position:-165px -395px}.flags-Chile{background-position:-205px -395px}.flags-Chad{background-position:-245px -395px}.flags-Central-African-Republic{background-position:-285px -395px}.flags-Cape-Verde{background-position:-325px -395px}.flags-Canada{background-position:-365px -395px}.flags-Cameroon{background-position:-405px -395px}.flags-Cambodia{background-position:-445px -395px}.flags-Burundi{background-position:-5px -425px}.flags-Burkina-Faso{background-position:-45px -425px}.flags-Bulgaria{background-position:-85px -425px}.flags-Brunei{background-position:-125px -425px}.flags-Brazil{background-position:-165px -425px}.flags-Botswana{background-position:-205px -425px}.flags-Bosnia-and-Herzegovina{background-position:-245px -425px}.flags-Bolivia{background-position:-285px -425px}.flags-Bhutan{background-position:-325px -425px}.flags-Benin{background-position:-365px -425px}.flags-Belize{background-position:-405px -425px}.flags-Belgium{background-position:-445px -425px}.flags-Belarus{background-position:-5px -455px}.flags-Barbados{background-position:-45px -455px}.flags-Bangladesh{background-position:-85px -455px}.flags-Bahrain{background-position:-125px -455px}.flags-Bahamas{background-position:-165px -455px}.flags-Azerbaijan{background-position:-205px -455px}.flags-Austria{background-position:-245px -455px}.flags-Australia{background-position:-285px -455px}.flags-Armenia{background-position:-325px -455px}.flags-Argentina{background-position:-365px -455px}.flags-Antigua-and-Barbuda{background-position:-405px -455px}.flags-Andorra{background-position:-445px -455px}.flags-Algeria{background-position:-5px -485px}.flags-Albania{background-position:-45px -485px}.flags-Afghanistan{background-position:-85px -485px}.flags-Bermuda{background-position:-125px -485px}.flags-European-Union{background-position:-165px -485px}.flags-XPT{background-position:-205px -485px}.flags-XAU{background-position:-245px -485px}.flags-XAG{background-position:-285px -485px}.flags-Wallis-and-Futuna{background-position:-325px -485px}.flags-Seborga{background-position:-365px -485px}.flags-Aruba{background-position:-405px -485px}.flags-Angola{background-position:-445px -485px}.flags-Saint-Helena{background-position:-485px -5px}.flags-Macao{background-position:-485px -35px}.flags-Jersey{background-position:-485px -65px}.flags-Isle-of-Man{background-position:-485px -95px}.flags-IMF{background-position:-485px -125px}.flags-Hong-Kong{background-position:-485px -155px}.flags-Guernsey{background-position:-485px -185px}.flags-Gibraltar{background-position:-485px -215px}.flags-Falkland-Islands{background-position:-485px -245px}.flags-Curacao{background-position:-485px -275px}.flags-Cayman-Islands{background-position:-485px -305px}.flags-Bitcoin{background-position:-485px -335px}.flags-small{background-image:url(https://cdn.shopify.com/s/files/1/0414/0681/t/42/assets/currency-flags-small.png?17777010653102962661);background-repeat:no-repeat;display:block;margin:5px 3px 0 0 !important;border:1px solid #fff;box-sizing:content-box;float:left}.doubly-nice-select.open .list .flags-small{margin-top:15px !important}.flags-small.flags-Zimbabwe{width:15px;height:10px;background-position:0 0}.flags-small.flags-Zambia{width:15px;height:10px;background-position:-15px 0}.flags-small.flags-Yemen{width:15px;height:10px;background-position:-30px 0}.flags-small.flags-Vietnam{width:15px;height:10px;background-position:-45px 0}.flags-small.flags-Venezuela{width:15px;height:10px;background-position:-60px 0}.flags-small.flags-Vatican-City{width:15px;height:10px;background-position:-75px 0}.flags-small.flags-Vanuatu{width:15px;height:10px;background-position:-90px 0}.flags-small.flags-Uzbekistan{width:15px;height:10px;background-position:-105px 0}.flags-small.flags-Uruguay{width:15px;height:10px;background-position:-120px 0}.flags-small.flags-United-Kingdom{width:15px;height:10px;background-position:-150px 0}.flags-small.flags-United-Arab-Emirates{width:15px;height:10px;background-position:-165px 0}.flags-small.flags-Ukraine{width:15px;height:10px;background-position:0 -10px}.flags-small.flags-Uganda{width:15px;height:10px;background-position:-15px -10px}.flags-small.flags-Tuvalu{width:15px;height:10px;background-position:-30px -10px}.flags-small.flags-Turkmenistan{width:15px;height:10px;background-position:-45px -10px}.flags-small.flags-Turkey{width:15px;height:10px;background-position:-60px -10px}.flags-small.flags-Tunisia{width:15px;height:10px;background-position:-75px -10px}.flags-small.flags-Trinidad-and-Tobago{width:15px;height:10px;background-position:-90px -10px}.flags-small.flags-Tonga{width:15px;height:10px;background-position:-105px -10px}.flags-small.flags-Togo{width:15px;height:10px;background-position:-120px -10px}.flags-small.flags-Thailand{width:15px;height:10px;background-position:-135px -10px}.flags-small.flags-Tanzania{width:15px;height:10px;background-position:-150px -10px}.flags-small.flags-Tajikistan{width:15px;height:10px;background-position:-165px -10px}.flags-small.flags-Taiwan{width:15px;height:10px;background-position:0 -20px}.flags-small.flags-Syria{width:15px;height:10px;background-position:-15px -20px}.flags-small.flags-Switzerland{width:15px;height:10px;background-position:-30px -20px}.flags-small.flags-Sweden{width:15px;height:10px;background-position:-45px -20px}.flags-small.flags-Swaziland{width:15px;height:10px;background-position:-60px -20px}.flags-small.flags-Suriname{width:15px;height:10px;background-position:-75px -20px}.flags-small.flags-Sudan{width:15px;height:10px;background-position:-90px -20px}.flags-small.flags-Sri-Lanka{width:15px;height:10px;background-position:-105px -20px}.flags-small.flags-Spain{width:15px;height:10px;background-position:-120px -20px}.flags-small.flags-South-Sudan{width:15px;height:10px;background-position:-135px -20px}.flags-small.flags-South-Africa{width:15px;height:10px;background-position:-150px -20px}.flags-small.flags-Somalia{width:15px;height:10px;background-position:-165px -20px}.flags-small.flags-Solomon-Islands{width:15px;height:10px;background-position:0 -30px}.flags-small.flags-Slovenia{width:15px;height:10px;background-position:-15px -30px}.flags-small.flags-Slovakia{width:15px;height:10px;background-position:-30px -30px}.flags-small.flags-Singapore{width:15px;height:10px;background-position:-45px -30px}.flags-small.flags-Sierra-Leone{width:15px;height:10px;background-position:-60px -30px}.flags-small.flags-Seychelles{width:15px;height:10px;background-position:-75px -30px}.flags-small.flags-Serbia{width:15px;height:10px;background-position:-90px -30px}.flags-small.flags-Senegal{width:15px;height:10px;background-position:-105px -30px}.flags-small.flags-Saudi-Arabia{width:15px;height:10px;background-position:-120px -30px}.flags-small.flags-Sao-Tome-and-Principe{width:15px;height:10px;background-position:-135px -30px}.flags-small.flags-San-Marino{width:15px;height:10px;background-position:-150px -30px}.flags-small.flags-Samoa{width:15px;height:10px;background-position:-165px -30px}.flags-small.flags-Saint-Vincent-and-the-Grenadines{width:15px;height:10px;background-position:0 -40px}.flags-small.flags-Saint-Lucia{width:15px;height:10px;background-position:-15px -40px}.flags-small.flags-Saint-Kitts-and-Nevis{width:15px;height:10px;background-position:-30px -40px}.flags-small.flags-Rwanda{width:15px;height:10px;background-position:-45px -40px}.flags-small.flags-Russia{width:15px;height:10px;background-position:-60px -40px}.flags-small.flags-Romania{width:15px;height:10px;background-position:-75px -40px}.flags-small.flags-Qatar{width:15px;height:10px;background-position:-90px -40px}.flags-small.flags-Portugal{width:15px;height:10px;background-position:-105px -40px}.flags-small.flags-Poland{width:15px;height:10px;background-position:-120px -40px}.flags-small.flags-Philippines{width:15px;height:10px;background-position:-135px -40px}.flags-small.flags-Peru{width:15px;height:10px;background-position:-150px -40px}.flags-small.flags-Paraguay{width:15px;height:10px;background-position:-165px -40px}.flags-small.flags-Papua-New-Guinea{width:15px;height:10px;background-position:0 -50px}.flags-small.flags-Panama{width:15px;height:10px;background-position:-15px -50px}.flags-small.flags-Palau{width:15px;height:10px;background-position:-30px -50px}.flags-small.flags-Pakistan{width:15px;height:10px;background-position:-45px -50px}.flags-small.flags-Oman{width:15px;height:10px;background-position:-60px -50px}.flags-small.flags-Norway{width:15px;height:10px;background-position:-75px -50px}.flags-small.flags-Nigeria{width:15px;height:10px;background-position:-90px -50px}.flags-small.flags-Niger{width:15px;height:10px;background-position:-105px -50px}.flags-small.flags-Nicaragua{width:15px;height:10px;background-position:-120px -50px}.flags-small.flags-New-Zealand{width:15px;height:10px;background-position:-135px -50px}.flags-small.flags-Netherlands{width:15px;height:10px;background-position:-150px -50px}.flags-small.flags-Nepal{width:15px;height:10px;background-position:-165px -50px}.flags-small.flags-Nauru{width:15px;height:10px;background-position:0 -60px}.flags-small.flags-Namibia{width:15px;height:10px;background-position:-15px -60px}.flags-small.flags-Myanmar{width:15px;height:10px;background-position:-30px -60px}.flags-small.flags-Mozambique{width:15px;height:10px;background-position:-45px -60px}.flags-small.flags-Morocco{width:15px;height:10px;background-position:-60px -60px}.flags-small.flags-Montenegro{width:15px;height:10px;background-position:-75px -60px}.flags-small.flags-Mongolia{width:15px;height:10px;background-position:-90px -60px}.flags-small.flags-Monaco{width:15px;height:10px;background-position:-105px -60px}.flags-small.flags-Moldova{width:15px;height:10px;background-position:-120px -60px}.flags-small.flags-Micronesia-_Federated_{width:15px;height:10px;background-position:-135px -60px}.flags-small.flags-Mexico{width:15px;height:10px;background-position:-150px -60px}.flags-small.flags-Mauritius{width:15px;height:10px;background-position:-165px -60px}.flags-small.flags-Mauritania{width:15px;height:10px;background-position:0 -70px}.flags-small.flags-Marshall-Islands{width:15px;height:10px;background-position:-15px -70px}.flags-small.flags-Malta{width:15px;height:10px;background-position:-30px -70px}.flags-small.flags-Mali{width:15px;height:10px;background-position:-45px -70px}.flags-small.flags-Maldives{width:15px;height:10px;background-position:-60px -70px}.flags-small.flags-Malaysia{width:15px;height:10px;background-position:-75px -70px}.flags-small.flags-Malawi{width:15px;height:10px;background-position:-90px -70px}.flags-small.flags-Madagascar{width:15px;height:10px;background-position:-105px -70px}.flags-small.flags-Macedonia{width:15px;height:10px;background-position:-120px -70px}.flags-small.flags-Luxembourg{width:15px;height:10px;background-position:-135px -70px}.flags-small.flags-Lithuania{width:15px;height:10px;background-position:-150px -70px}.flags-small.flags-Liechtenstein{width:15px;height:10px;background-position:-165px -70px}.flags-small.flags-Libya{width:15px;height:10px;background-position:0 -80px}.flags-small.flags-Liberia{width:15px;height:10px;background-position:-15px -80px}.flags-small.flags-Lesotho{width:15px;height:10px;background-position:-30px -80px}.flags-small.flags-Lebanon{width:15px;height:10px;background-position:-45px -80px}.flags-small.flags-Latvia{width:15px;height:10px;background-position:-60px -80px}.flags-small.flags-Laos{width:15px;height:10px;background-position:-75px -80px}.flags-small.flags-Kyrgyzstan{width:15px;height:10px;background-position:-90px -80px}.flags-small.flags-Kuwait{width:15px;height:10px;background-position:-105px -80px}.flags-small.flags-Kosovo{width:15px;height:10px;background-position:-120px -80px}.flags-small.flags-Korea-South{width:15px;height:10px;background-position:-135px -80px}.flags-small.flags-Korea-North{width:15px;height:10px;background-position:-150px -80px}.flags-small.flags-Kiribati{width:15px;height:10px;background-position:-165px -80px}.flags-small.flags-Kenya{width:15px;height:10px;background-position:0 -90px}.flags-small.flags-Kazakhstan{width:15px;height:10px;background-position:-15px -90px}.flags-small.flags-Jordan{width:15px;height:10px;background-position:-30px -90px}.flags-small.flags-Japan{width:15px;height:10px;background-position:-45px -90px}.flags-small.flags-Jamaica{width:15px;height:10px;background-position:-60px -90px}.flags-small.flags-Italy{width:15px;height:10px;background-position:-75px -90px}.flags-small.flags-Israel{width:15px;height:10px;background-position:-90px -90px}.flags-small.flags-Ireland{width:15px;height:10px;background-position:-105px -90px}.flags-small.flags-Iraq{width:15px;height:10px;background-position:-120px -90px}.flags-small.flags-Iran{width:15px;height:10px;background-position:-135px -90px}.flags-small.flags-Indonesia{width:15px;height:10px;background-position:-150px -90px}.flags-small.flags-India{width:15px;height:10px;background-position:-165px -90px}.flags-small.flags-Iceland{width:15px;height:10px;background-position:0 -100px}.flags-small.flags-Hungary{width:15px;height:10px;background-position:-15px -100px}.flags-small.flags-Honduras{width:15px;height:10px;background-position:-30px -100px}.flags-small.flags-Haiti{width:15px;height:10px;background-position:-45px -100px}.flags-small.flags-Guyana{width:15px;height:10px;background-position:-60px -100px}.flags-small.flags-Guinea{width:15px;height:10px;background-position:-75px -100px}.flags-small.flags-Guinea-Bissau{width:15px;height:10px;background-position:-90px -100px}.flags-small.flags-Guatemala{width:15px;height:10px;background-position:-105px -100px}.flags-small.flags-Grenada{width:15px;height:10px;background-position:-120px -100px}.flags-small.flags-Grecee{width:15px;height:10px;background-position:-135px -100px}.flags-small.flags-Ghana{width:15px;height:10px;background-position:-150px -100px}.flags-small.flags-Germany{width:15px;height:10px;background-position:-165px -100px}.flags-small.flags-Georgia{width:15px;height:10px;background-position:0 -110px}.flags-small.flags-Gambia{width:15px;height:10px;background-position:-15px -110px}.flags-small.flags-Gabon{width:15px;height:10px;background-position:-30px -110px}.flags-small.flags-France{width:15px;height:10px;background-position:-45px -110px}.flags-small.flags-Finland{width:15px;height:10px;background-position:-60px -110px}.flags-small.flags-Fiji{width:15px;height:10px;background-position:-75px -110px}.flags-small.flags-Ethiopia{width:15px;height:10px;background-position:-90px -110px}.flags-small.flags-Estonia{width:15px;height:10px;background-position:-105px -110px}.flags-small.flags-Eritrea{width:15px;height:10px;background-position:-120px -110px}.flags-small.flags-Equatorial-Guinea{width:15px;height:10px;background-position:-135px -110px}.flags-small.flags-El-Salvador{width:15px;height:10px;background-position:-150px -110px}.flags-small.flags-Egypt{width:15px;height:10px;background-position:-165px -110px}.flags-small.flags-Ecuador{width:15px;height:10px;background-position:0 -120px}.flags-small.flags-East-Timor{width:15px;height:10px;background-position:-15px -120px}.flags-small.flags-Dominican-Republic{width:15px;height:10px;background-position:-30px -120px}.flags-small.flags-Dominica{width:15px;height:10px;background-position:-45px -120px}.flags-small.flags-Djibouti{width:15px;height:10px;background-position:-60px -120px}.flags-small.flags-Denmark{width:15px;height:10px;background-position:-75px -120px}.flags-small.flags-Czech-Republic{width:15px;height:10px;background-position:-90px -120px}.flags-small.flags-Cyprus{width:15px;height:10px;background-position:-105px -120px}.flags-small.flags-Cuba{width:15px;height:10px;background-position:-120px -120px}.flags-small.flags-Croatia{width:15px;height:10px;background-position:-135px -120px}.flags-small.flags-Cote-d_Ivoire{width:15px;height:10px;background-position:-150px -120px}.flags-small.flags-Costa-Rica{width:15px;height:10px;background-position:-165px -120px}.flags-small.flags-Congo-Republic{width:15px;height:10px;background-position:0 -130px}.flags-small.flags-Congo-Democratic{width:15px;height:10px;background-position:-15px -130px}.flags-small.flags-Comoros{width:15px;height:10px;background-position:-30px -130px}.flags-small.flags-Colombia{width:15px;height:10px;background-position:-45px -130px}.flags-small.flags-China{width:15px;height:10px;background-position:-60px -130px}.flags-small.flags-Chile{width:15px;height:10px;background-position:-75px -130px}.flags-small.flags-Chad{width:15px;height:10px;background-position:-90px -130px}.flags-small.flags-Central-African-Republic{width:15px;height:10px;background-position:-105px -130px}.flags-small.flags-Cape-Verde{width:15px;height:10px;background-position:-120px -130px}.flags-small.flags-Canada{width:15px;height:10px;background-position:-135px -130px}.flags-small.flags-Cameroon{width:15px;height:10px;background-position:-150px -130px}.flags-small.flags-Cambodia{width:15px;height:10px;background-position:-165px -130px}.flags-small.flags-Burundi{width:15px;height:10px;background-position:0 -140px}.flags-small.flags-Burkina-Faso{width:15px;height:10px;background-position:-15px -140px}.flags-small.flags-Bulgaria{width:15px;height:10px;background-position:-30px -140px}.flags-small.flags-Brunei{width:15px;height:10px;background-position:-45px -140px}.flags-small.flags-Brazil{width:15px;height:10px;background-position:-60px -140px}.flags-small.flags-Botswana{width:15px;height:10px;background-position:-75px -140px}.flags-small.flags-Bosnia-and-Herzegovina{width:15px;height:10px;background-position:-90px -140px}.flags-small.flags-Bolivia{width:15px;height:10px;background-position:-105px -140px}.flags-small.flags-Bhutan{width:15px;height:10px;background-position:-120px -140px}.flags-small.flags-Benin{width:15px;height:10px;background-position:-135px -140px}.flags-small.flags-Belize{width:15px;height:10px;background-position:-150px -140px}.flags-small.flags-Belgium{width:15px;height:10px;background-position:-165px -140px}.flags-small.flags-Belarus{width:15px;height:10px;background-position:0 -150px}.flags-small.flags-Barbados{width:15px;height:10px;background-position:-15px -150px}.flags-small.flags-Bangladesh{width:15px;height:10px;background-position:-30px -150px}.flags-small.flags-Bahrain{width:15px;height:10px;background-position:-45px -150px}.flags-small.flags-Bahamas{width:15px;height:10px;background-position:-60px -150px}.flags-small.flags-Azerbaijan{width:15px;height:10px;background-position:-75px -150px}.flags-small.flags-Austria{width:15px;height:10px;background-position:-90px -150px}.flags-small.flags-Australia{width:15px;height:10px;background-position:-105px -150px}.flags-small.flags-Armenia{width:15px;height:10px;background-position:-120px -150px}.flags-small.flags-Argentina{width:15px;height:10px;background-position:-135px -150px}.flags-small.flags-Antigua-and-Barbuda{width:15px;height:10px;background-position:-150px -150px}.flags-small.flags-Andorra{width:15px;height:10px;background-position:-165px -150px}.flags-small.flags-Algeria{width:15px;height:10px;background-position:0 -160px}.flags-small.flags-Albania{width:15px;height:10px;background-position:-15px -160px}.flags-small.flags-Afghanistan{width:15px;height:10px;background-position:-30px -160px}.flags-small.flags-Bermuda{width:15px;height:10px;background-position:-45px -160px}.flags-small.flags-European-Union{width:15px;height:10px;background-position:-60px -160px}.flags-small.flags-United-States{width:15px;height:9px;background-position:-75px -160px}.flags-small.flags-XPT{width:15px;height:10px;background-position:-90px -160px}.flags-small.flags-XAU{width:15px;height:10px;background-position:-105px -160px}.flags-small.flags-XAG{width:15px;height:10px;background-position:-120px -160px}.flags-small.flags-Wallis-and-Futuna{width:15px;height:10px;background-position:-135px -160px}.flags-small.flags-Seborga{width:15px;height:10px;background-position:-150px -160px}.flags-small.flags-Aruba{width:15px;height:10px;background-position:-165px -160px}.flags-small.flags-Angola{width:15px;height:10px;background-position:0 -170px}.flags-small.flags-Saint-Helena{width:15px;height:10px;background-position:-15px -170px}.flags-small.flags-Macao{width:15px;height:10px;background-position:-30px -170px}.flags-small.flags-Jersey{width:15px;height:10px;background-position:-45px -170px}.flags-small.flags-Isle-of-Man{width:15px;height:10px;background-position:-60px -170px}.flags-small.flags-IMF{width:15px;height:10px;background-position:-75px -170px}.flags-small.flags-Hong-Kong{width:15px;height:10px;background-position:-90px -170px}.flags-small.flags-Guernsey{width:15px;height:10px;background-position:-105px -170px}.flags-small.flags-Gibraltar{width:15px;height:10px;background-position:-120px -170px}.flags-small.flags-Falkland-Islands{width:15px;height:10px;background-position:-135px -170px}.flags-small.flags-Curacao{width:15px;height:10px;background-position:-150px -170px}.flags-small.flags-Cayman-Islands{width:15px;height:10px;background-position:-165px -170px}.flags-small.flags-Bitcoin{width:15px;height:10px;background-position:-180px 0}.doubly-float .doubly-nice-select .list{top:-271px;left:0;right:auto}</style>'
      )
      jQueryGrizzly('head').append(
        '<style>.doubly-nice-select, .doubly-nice-select .list { background: #FFFFFF; } .doubly-nice-select .current, .doubly-nice-select .list .option { color: #403F3F; } .doubly-nice-select .option:hover, .doubly-nice-select .option.focus, .doubly-nice-select .option.selected.focus { background-color: #F6F6F6; } .price-on-hover { background-color: #333333 !important; color: #FFFFFF !important; } .price-on-hover:after { border-bottom-color: #333333 !important;} .doubly-message { background-color: #333333 !important; color: #FFFFFF !important; border-radius:5px; padding:3px 10px; }</style>'
      )
      var doublyInstalled = false
      jQueryGrizzly('script').each(function () {
        if (
          jQueryGrizzly(this)
            .text()
            .indexOf('ginit.js?') != -1 &&
          jQueryGrizzly(this)
            .text()
            .indexOf('asyncLoad') != -1
        ) {
          doublyInstalled = true
        }
      })
      if (doublyInstalled && typeof DoublyCurrency !== 'undefined') {
        jQueryGrizzly('head').append(
          '<style> .navbar-header .doubly-wrapper { margin:4px 5px 0 0; } .navbar-right .doubly-wrapper { margin:13% 5px 0 0; } @media screen and (min-width:768px) { .navbar-header .doubly-wrapper { display:none; } } @media screen and (max-width:768px) { .navbar-header { z-index:5 !important; } } @media screen and (max-width:480px) { .doubly-nice-select.open .list, .doubly-nice-select .list { right:auto !important; left:-100px !important; } } .doubly-message { margin:0px 15px; } </style>'
        )
        jQueryGrizzly('.navbar-right .cart-icon')
          .parent()
          .parent()
          .before('<li class="doubly-wrapper"></li>')
        jQueryGrizzly('.navbar-header .navbar-brand').before(
          '<div class="doubly-wrapper"></div>'
        )
        jQueryGrizzly('.navbar-header .doubly-wrapper').addClass('navbar-cart')
        jQueryGrizzly('.pick_currency').remove()
        if (jQueryGrizzly('.cart_tbl .doubly-message').length == 0) {
          jQueryGrizzly('.cart_tbl .order_notes').after(
            '<div class="doubly-message"></div>'
          )
        }
        function afterCurrencySwitcherInit () {
          jQueryGrizzly('.doubly-wrapper .doubly-nice-select').addClass('slim')
        }
        /* add select in select wrapper or body */ if (
          jQueryGrizzly('.doubly-wrapper').length > 0
        ) {
          var doublyWrapper = '.doubly-wrapper';
        } else if (jQueryGrizzly('.doubly-float').length == 0) {
          var doublyWrapper = '.doubly-float';
          jQueryGrizzly('body').append('<div class="doubly-float"></div>')
        }
        jQueryGrizzly(doublyWrapper).each(function () {
          jQueryGrizzly(this).prepend(
            '<select class="currency-switcher right" name="doubly-currencies"><option value="USD" data-country="United-States" data-currency-symbol="&#36;" data-display="USD">US Dollar</option><option value="EUR" data-country="European-Union" data-currency-symbol="&#8364;" data-display="EUR">Euro</option><option value="CAD" data-country="Canada" data-currency-symbol="&#36;" data-display="CAD">Canadian Dollar</option><option value="AUD" data-country="Australia" data-currency-symbol="&#36;" data-display="AUD">Australian Dollar</option><option value="JPY" data-country="Japan" data-currency-symbol="&#165;" data-display="JPY">Japanese Yen</option><option value="GBP" data-country="United-Kingdom" data-currency-symbol="&#163;" data-display="GBP">British Pound Sterling</option><option value="INR" data-country="India" data-currency-symbol="&#8377;" data-display="INR">Indian Rupee</option><option value="PHP" data-country="Philippines" data-currency-symbol="&#8369;" data-display="PHP">Philippine Peso</option><option value="BRL" data-country="Brazil" data-currency-symbol="&#82;&#36;" data-display="BRL">Brazilian Real</option><option value="SGD" data-country="Singapore" data-currency-symbol="&#36;" data-display="SGD">Singapore Dollar</option></select>'
          )
        })
        var shopCurrency = 'USD';
        var defaultCurrency = shopCurrency
        var allowedCurrencies = jQueryGrizzly.parseJSON(
          '["USD","EUR","CAD","AUD","JPY","GBP","INR","PHP","BRL","SGD"]'
        )
        var removeDecimals = 1
        var roundDecimals = 0
        var roundTo = '99';
        var showPriceOnHover = 1
        var showCurrencyMessage = 1
        var currencyMessage =
          'All orders are processed in USD. While the content of your cart is currently displayed in <span class="selected-currency"></span>, you will checkout using USD at the most current exchange rate.'
        DoublyCurrency.format = 'money_with_currency_format';
        function initCurrencySwitcher () {
          /* Cookie currency */ var cookieCurrency = DoublyCurrency.cookie.read()
          /* Set select value before document ready functions fire to avoid lag */ if (
            cookieCurrency == null ||
            cookieCurrency == 'undefined'
          ) {
            jQueryGrizzly('[name=doubly-currencies]').val(defaultCurrency)
          } else {
            jQueryGrizzly('[name=doubly-currencies]').val(cookieCurrency)
          }
          jQueryGrizzly(
            '.doubly-wrapper .currency-switcher, .doubly-float .currency-switcher'
          ).niceSelect()
          /* Fix for customer account pages */ jQueryGrizzly(
            'span.' + spanClass + ' span.' + spanClass
          ).each(function () {
            jQueryGrizzly(this)
              .parents('span.' + spanClass)
              .removeClass(spanClass)
          })
          /* If there's no cookie. */ if (
            cookieCurrency == null ||
            cookieCurrency == 'undefined'
          ) {
            DoublyCurrency.convertAll(defaultCurrency)
          } /* If the cookie value does not correspond to any value in the currency dropdown. */ else if (
            jQueryGrizzly.inArray(cookieCurrency, allowedCurrencies) === -1
          ) {
            DoublyCurrency.currentCurrency = shopCurrency
            DoublyCurrency.cookie.write(shopCurrency)
          } else {
            DoublyCurrency.convertAll(cookieCurrency)
          }
          jQueryGrizzly('[name=doubly-currencies]').change(function () {
            var newCurrency = jQueryGrizzly(this).val()
            DoublyCurrency.convertAll(newCurrency)
            /* in case more than 1 currency switcher, update value of all of them */ jQueryGrizzly(
              '[name=doubly-currencies]'
            ).val(jQueryGrizzly(this).val())
            initExtraFeatures()
          })
          jQueryGrizzly('.single-option-selector').bind(
            'change.single-option-selector',
            function () {
              DoublyCurrency.convertAll(
                jQueryGrizzly('[name=doubly-currencies]').val()
              )
              initExtraFeatures()
            }
          )
          if (jQueryGrizzly('.single-option-radio label').length > 0) {
            jQueryGrizzly('.single-option-radio label').bind(
              'click.single-option-radio',
              function () {
                setTimeout(function () {
                  DoublyCurrency.convertAll(
                    jQueryGrizzly('[name=doubly-currencies]').val()
                  )
                  initExtraFeatures()
                }, 1)
              }
            )
            jQueryGrizzly('.single-option-radio label').bind(
              'touchend.single-option-radio',
              function () {
                setTimeout(function () {
                  DoublyCurrency.convertAll(
                    jQueryGrizzly('[name=doubly-currencies]').val()
                  )
                  initExtraFeatures()
                }, 1)
              }
            )
          }
          /* Panda Swatchify app */ if (
            jQueryGrizzly('.swatch-panda .color label').length > 0
          ) {
            jQueryGrizzly('.swatch-panda .color label').click(function () {
              setTimeout(function () {
                DoublyCurrency.convertAll(
                  jQueryGrizzly('[name=doubly-currencies]').val()
                )
              }, 1)
              initExtraFeatures()
            })
          }
          /* sca-qv-button */ setTimeout(function () {
            jQueryGrizzly('.sca-qv-button').bind(
              'click.changeCurrency',
              function () {
                setTimeout(function () {
                  DoublyCurrency.convertAll(
                    jQueryGrizzly('[name=doubly-currencies]').val()
                  )
                  jQueryGrizzly('.single-option-selector').bind(
                    'change.single-option-selector',
                    function () {
                      DoublyCurrency.convertAll(
                        jQueryGrizzly('[name=doubly-currencies]').val()
                      )
                      initExtraFeatures()
                    }
                  )
                }, 1000)
              }
            )
          }, 1000)
          if (jQueryGrizzly('.swatch-element').length > 0) {
            jQueryGrizzly('.swatch-element').bind(
              'click.swatch-element',
              function () {
                setTimeout(function () {
                  DoublyCurrency.convertAll(
                    jQueryGrizzly('[name=doubly-currencies]').val()
                  )
                }, 1)
              }
            )
          }
          /* beeketing xhr */ if (catchXHR) {
            function addXMLRequestCallback (callback) {
              var oldSend, i
              if (XMLHttpRequest.callbacks) {
                XMLHttpRequest.callbacks.push(callback)
              } else {
                XMLHttpRequest.callbacks = [callback]
                oldSend = XMLHttpRequest.prototype.send
                XMLHttpRequest.prototype.send = function () {
                  for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
                    XMLHttpRequest.callbacks[i](this)
                  }
                  oldSend.apply(this, arguments)
                };
              }
            }
            addXMLRequestCallback(function (xhr) {
              if (
                xhr._url.indexOf('recommendation/result/view-product/') !==
                  -1 ||
                xhr._url.indexOf('recommendation/result/recent-view/') !== -1
              ) {
                setTimeout(function () {
                  DoublyCurrency.convertAll(
                    jQueryGrizzly('[name=doubly-currencies]').val()
                  )
                  initExtraFeatures()
                }, 1000)
              }
            })
          }
          jQueryGrizzly(document).bind('ajaxComplete.doubly', function () {
            DoublyCurrency.convertAll(
              jQueryGrizzly('[name=doubly-currencies]').val()
            )
            initExtraFeatures()
          })
          initExtraFeatures()
          if (typeof afterCurrencySwitcherInit === 'function') {
            afterCurrencySwitcherInit()
          }
          DoublyGlobalCurrency = DoublyCurrency
        }
        function initExtraFeatures () {
          /* initPriceHover */ jQueryGrizzly('span.' + spanClass).unbind(
            'mouseenter mouseleave'
          )
          if (
            showPriceOnHover &&
            DoublyCurrency.currentCurrency !== shopCurrency
          ) {
            jQueryGrizzly('span.' + spanClass).hover(
              function () {
                jQueryGrizzly(this).append(
                  '<span class="price-on-hover-wrapper"><span class="price-on-hover">' +
                    jQueryGrizzly(this).text() +
                    '</span></span>'
                )
                DoublyCurrency.convertAll(shopCurrency, '.price-on-hover')
              },
              function () {
                jQueryGrizzly('span').remove('.price-on-hover-wrapper')
              }
            )
            jQueryGrizzly('*').off('touchend.removePriceOnHover')
            jQueryGrizzly('*').on('touchend.removePriceOnHover', function () {
              jQueryGrizzly('span').remove('.price-on-hover-wrapper')
            })
            jQueryGrizzly('span.' + spanClass).off('touchend.addPriceOnHover')
            jQueryGrizzly('span.' + spanClass).on(
              'touchend.addPriceOnHover',
              function () {
                var element = jQueryGrizzly(this)
                setTimeout(function () {
                  element.append(
                    '<span class="price-on-hover-wrapper"><span class="price-on-hover">' +
                      element.text() +
                      '</span></span>'
                  )
                  DoublyCurrency.convertAll(shopCurrency, '.price-on-hover')
                }, 1)
              }
            )
          }
          /* initCartMessage */ if (showCurrencyMessage) {
            if (jQueryGrizzly('.doubly-message').html() == '') {
              jQueryGrizzly('.doubly-message').html(currencyMessage)
            }
            jQueryGrizzly('.selected-currency').text(
              DoublyCurrency.currentCurrency
            )
          }
          if (DoublyCurrency.currentCurrency == shopCurrency) {
            jQueryGrizzly('.doubly-message').hide()
          } else {
            jQueryGrizzly('.doubly-message').show()
          }
        }
        /* if user came from google shopping ad, disable converter */ var utmSource = getParameterByName(
          'utm_source'
        )
        var dfwTracker = getParameterByName('dfw_tracker')
        if (
          (utmSource == null || utmSource != 'googleshopping') &&
          dfwTracker == null
        ) {
          /* Country code */ var autoSwitch = 1
          if (autoSwitch) {
            var tempCookieCurrency = DoublyCurrency.cookie.read()
            var currencyByCountry = jQueryGrizzly.parseJSON(
              '{"0c9fbda2f60ec2898217462c14a8ca28":"AFN","77825ffc7ed510e4219e27367f50f427":"ALL","25a2b91d530da6d79800c24bec689d61":"USD","6916af863143143036e271f9117caadc":"DZD","36d215ec8ce6c5a767e678b13f50862b":"USD","fb911160ef95c46fb368ef2eff5570c0":"EUR","b3476dae9aa570b88a30abf70a978252":"AOA","0dcfbae12c14fe30dc542b8206e459bd":"XCD","78da38f7ae93bc36b6bd59ca89a8429e":"AZN","00bad30068c0f10b3b77506da947caa2":"ARS","ae7f19edb7b436fcaf57a36430c3d3b0":"AUD","33d5bb379aebcde4d167f033df2d382e":"EUR","9edd33fbd532c66cacf94af4db21dab7":"BSD","925c1d014fbf174114bb903bf2c7bac5":"BHD","7728cea5bac9cde9907b1085712ed9f2":"BDT","749b2ebf8d945c6cf6c5f048c72aaa2a":"AMD","51a5c332372cd72420a791368eece6f8":"BBD","a19904ce7ba5c44cb4d91748288eefe1":"EUR","35e59d62315172a2d1d54dc0dab770e2":"BMD","90719543ee7853da54814bea0989487b":"BTN","a64e8989e48fe1e7d05d23f4e8e9780c":"BOB","12a516dd73e5e53bd31569e4fcc041e6":"BAM","aedbb109003adaf6af69128c4e83cbe2":"BWP","10cfd19a20aae97470c9fbec788b71d6":"NOK","6b1966f4af75004e954a0de3c7fe7c1b":"BRL","a8958ab7798f4aef591661273c373f08":"BZD","950722fea3174745d7dfa0458b3cf71b":"USD","af5b357afe354e75e320a29e2b045978":"SBD","b53c1f894f02b24dcda710f846b6f0b3":"USD","1eb8a653b84f6acca0219cc54beac35f":"BND","181b4e020d6109051fc88ee13fb045ca":"BGN","3024a0f4e34ca7dc9ee76ebd3c519a83":"MMK","b69c9b470097833122f215cf0fa67382":"BIF","df9ace98f7da2dab53a04a99cf75a3de":"BYN","8d516a5655bcd1dd017b946ca6eed9d6":"KHR","1ea38124b279c2416df6b493978da030":"XAF","132df582bdd725b956df4dfe33711f28":"CAD","7322579988573acf8fd138830bc5e884":"CVE","51bc3879ab2a3f057693cb9ec6e45c94":"KYD","3a3cea975adfe6240593cd1e5388120d":"XAF","7bbd9b6a782e6e1e6a117129051aac32":"LKR","60b136c7758c1178ce48c292d65851e5":"XAF","c3c3ac331bcee531802bc9c1712f5c54":"CLP","92035c0407d62963eda165cda28d6114":"CNY","2bd18f873de9138c69de623ee7f04af9":"TWD","6810126b0ee4236a21f0ac1c4fdb6764":"AUD","bcf6ce5201899723a0a06792c6caeed3":"AUD","5a43428b67ab8a57bfbe1088c4b7f42f":"COP","f2b2534365ee9f71fbed5e2afcdca50a":"KMF","f773a4708bf9adfefd6298f12b062124":"EUR","f8ec5d9332715db4eb25a5347286e599":"XAF","92150c6fdab610675a24978b4cfbf368":"CDF","96b30a27a1720ddf1b08cc915d36acab":"NZD","7a7f88e4952e63bfcd9635168264fe45":"CRC","67a7fa7c3712d0f7a9dc50853047e144":"HRK","93d5e4bf2d22ead33ca93c5214b54463":"CUP","fa68eef805d5b746aadfc57d13dda9a9":"EUR","a8c576d30a24ac83a47745f71143946b":"CZK","2b08e971cdcf7ef71b19dc31bc06b34b":"XOF","05604cf68845e754896337a8f344e8fc":"DKK","6a7b45431588328067bcdea71dff5b2a":"XCD","1454a2d0108781f78149c88fc8f36d7b":"DOP","636307c6fe4c4b5f7f8c5d30fd69bd65":"USD","cbe09632afa1023daf096d3c95eb652e":"SVC","d30229b54be75d9af0c2e367659a444d":"XAF","3a17356976367ffbf3dd2cee9d9ebad1":"ETB","b263a08ae41abd42665413977d57598f":"ERN","1d1ad6b40e3d3a78667c18e8f9bcbd31":"EUR","037e3819826f61b753b5f5522720668b":"DKK","e27ad3455ba99e93fcca2d6002a07a96":"FKP","48bbd3a2d035cbaf0147d48d70177188":"GBP","a028125f469669a7318f1177d01951c7":"FJD","e23547145863c2b35236b8e0aed3a1ca":"EUR","20fffcb7953b3a667d99abc2ab8fa599":"EUR","df165264a8ef4d00ff49622f4bdbba44":"EUR","88754724b0746ba01695521f0b7bd554":"EUR","c0deda8719b6bb588d2affcdda0b55c9":"XPF","4b99e0aa7795a20b86ea71bb517e3c1f":"EUR","f622b9c2c0cbbc0ca896148c9c92d897":"DJF","8497791e5f8c69a8f6b5ac7b40407442":"XAF","5479ec9596d2508d9f10a91e35e624a5":"GEL","599a0c6d00669d5a18a073e813ad25c1":"GMD","2a3d1dea32681c822faadda2c7bedc93":"ILS","244b30c0daca97ac92f8dc4d7196a979":"EUR","7e23e62798f68cfe69f385cfc5d24bc2":"GHS","b6564c7e17cce6b08e8c28e9967777cf":"GIP","34bcc718cc321ae168c1f9fc4675d6db":"AUD","eadfe4ad5bf03256d8945fd987b9af1d":"EUR","ac960308358e08e9e02979c2f73640a1":"DKK","4e4fa68feb9fe6e476e4fc4c2b0c29cd":"XCD","9d94ac33984c098a1990dfab46d247ff":"EUR","092b02a88419e23d1756a310d95fdfd0":"USD","b204130dc52fe1ffb1fbcbd9ed9648db":"GTQ","372cb8311b845822dc0f94eef709b010":"GNF","57e542cde098aeba6a4cde0f240030ed":"GYD","6896dc1edf7162438bd6d2e24e81adc8":"HTG","efed88903dcd2f2f97398926dc5ea002":"AUD","f3c832d9f2faa0f2f2d6d8c73af455ca":"EUR","0de5a270cc68ef2a3a302d34e367752c":"HNL","ed0cea31460c29d419378320b9ba2add":"HKD","3566563af041eb64212d8e65c749fb85":"HUF","079927f1a99088814d8bc6a55445016f":"ISK","6401e1998d7987f15b52a3581165ff73":"INR","3c4dd418d1e359368054a5f1f9c9b049":"IDR","b65512eda9d25418e41fccdf473d5579":"IRR","807dba887c5c6e25089c209e0135b7be":"IQD","5b3d9c4d15449457901391acd80adbb1":"EUR","41e21e8c34d6aa3da5b718cf4231390d":"ILS","0dab797ef2bac38eacc418c9f8e15378":"EUR","8966da5d224a004f4cb84804a5f6c688":"XOF","5afe1f34ddec8ef4efc0d0a870cddd61":"JMD","bd9b17731f33daee1dcc16697cdd0cf2":"JPY","d5e688005a94a3e4757619a99f369013":"KZT","80205369a97c21e5b252abfa282346ed":"JOD","3edf06f0c8964eac1c6726937f7f352b":"KES","299afb61e687060e5e66bee8b29799f5":"KPW","04b22e7a99e35a4e6f6514b57cc97ae9":"KRW","0adfee7e28312e24433bcefe25145bce":"KWD","73b4c50df66f6a1a5798982a4039b0b0":"KGS","34b09239ed51e9a61f19a88ab3f7fcea":"LAK","cae77d8621fa4d86b0b92481880a5317":"LBP","bba28a0a3390f1867d6dbdb765c6a4dc":"LSL","77e8fb6bf8a842fbd6b34be76499ebfa":"EUR","d458e452b82fc3f8b22a793a46b9f98d":"LRD","1ae51d98f27604480f17d8fd97cac38a":"LYD","9165792285868d0cba002e56081bb192":"CHF","b7227de55a8695f5e7efe963c8f37580":"EUR","e1dc245d3be5a40f86acdc91ac12ea63":"EUR","1058307c74890a16402e5c523d45ccc4":"MOP","767899052385440a885d7de938daad01":"MGA","42afcbb9ee739cc47c7d1702eb6ce514":"MWK","275edfb0464d6ef42d4ab83e25f2c61f":"MYR","0920c810738edbd92221dc14a20fd857":"MVR","3d49572a28be2f390a459064d1a6fb86":"XOF","4e0781dfb39bff6f61a172fc36311361":"EUR","49216d21984ad4769256a4bda5b8e468":"EUR","7610e93ea7d4c45f7e396acd695cdabd":"MRO","76cae5901fbe4ffc09d33953adb034b1":"MUR","00837c88b2fca5736a8f9d3dc2b07bc5":"MXN","f363cf2859ce0362565e44f1893875a9":"EUR","1dccd443b3eb8235d5b5d5d6da8382dc":"MNT","6c9a5e308c5817eaef3edb3ecb7ad67c":"MDL","1eb3ae043c810aa530d470446f31feeb":"EUR","223989fc8d5283e598bde9d0073dd319":"XCD","f95322c1726fb8beb6a49e69f406062e":"MAD","ac1cd746ee4b708a441ff9e4fb36ac4c":"MZN","738079a8cc1ec3c3e2129b1e243fc759":"OMR","dfbe6bca2b81e38c0a9c080424b1d059":"NAD","c768fd9e960be7a96a15f3fe01180b75":"AUD","611b83f00e115fa1bd82798e0880237c":"NPR","ae260c648e19c69d011aaf48cf5f66ef":"EUR","27e53f66add17b02c21300e3e431c533":"ANG","718605db25ac86e0a81169c100c42433":"AWG","42df8577e98085941b5516769691614d":"ANG","ea5260e4f756a54ed674938e72b8468b":"USD","5825c0e889637e79beca81650c4c1ac3":"XPF","95f82d217678c6bcb292b8fc7682234f":"VUV","5b1e176938f4fc1e6522b9f9151d42d6":"NZD","4ec181c3cff3032f67d94739e0e8737d":"NIO","b3301ed2070ec7aceb5be3b5dcc07ad9":"XOF","cb1d6534badc367e8dd9d40ded713069":"NGN","0511d3f5aac43354944b18475222f917":"NZD","cc055af6be2b737d4707a96a552198ee":"AUD","3e08b5ba3280cdc6e122982b8d112784":"NOK","cac21d3c62a7eb45ee19b3ce11a5fbdf":"USD","8de2e7ca50fc23e4bd3bdad52af3037a":"USD","8ada16d7e26335f17caa2acb955e4c63":"USD","c2f8a60ae14932219e028d614e527959":"USD","e79c4eeea8288d0e262d1d406a7e66f8":"USD","58c5e67c7a17d3741c98f44625f55756":"PKR","e02107346a74b3d630cc6b3711a88536":"PAB","41a47e227563d31fdc856d695d3d1844":"PGK","6ed7fa60539658265859ef7d48f07785":"PYG","90d2c82a2026996f3108f8b150828939":"PEN","e0ee9955cb9435aa9069cb193c54ef08":"PHP","d5bb7b09f2c1d285f61754cdeb4fdd0a":"NZD","e47a66a04fc75e67aa65a0130d88c289":"PLN","fa5ec300d94ca4e8726f3324a7221e15":"EUR","da7dc0acf54f11a299598d5c1abc5961":"XOF","a846d0e7d02f0ec40f36262361c8dd18":"USD","bd68e4c39ab0b7db62f065768d28c62b":"USD","a16006c8c29e90446f0fde04b6e3e88f":"QAR","37e4065a1f7e35bfaef4bbf802897a2a":"EUR","1ccbbd574db7fd92d40a94c7f6725c49":"RON","de553067944fe9a58a174f50fef9f3d1":"RUB","5735bd62d4dc46c38a264768624c5330":"RWF","befcbbe1fc95eec06ccf45a9883d7577":"EUR","9b39639bd0ff46e7623c70ceef74ea51":"SHP","94244557185f84c304bb2373b3534fbc":"XCD","eef4bec625bc2eee7b9c43287bc6e0a9":"XCD","8589dd64d0c84007198df76e131cfc13":"XCD","390af7034abbeab1dea79b0a08e08eb0":"EUR","2bd9b35fa78df0a08155979123b82a6c":"EUR","c845f4e559f39bdfbad73b4ce8ee47bf":"XCD","87336adbbb2d9cf8aa8c3432a8b6925d":"EUR","ae6edefdd8d61735e296170da3e4ec21":"STD","717b8accc93f982d5200c72fc0bd6a2a":"SAR","707862748b5f9e173d8540eed312ed59":"XOF","3f7d04eb7ec8fd8019d5e92429ef11ea":"RSD","27143b90c8dcf38ec194a972b93872f5":"SCR","7ceef5912e0f9e67185881af9935da48":"SLL","7f882944ca9cab2763fbdaa377061464":"SGD","54e8c9819bcbc5b574fb44d54d25aa5a":"EUR","0adb4d2468afd4dbd61c49f7fd36d88b":"VND","924f2e3fa5749228c3c6e8ead75f30b1":"EUR","814976873ee98a5cde52aa91f8e57f42":"SOS","c1834a641b269e2d0a9403dd32baae92":"ZAR","9338d6e26cefddb2528d5b68a06d2717":"USD","1d945ab7aaaf4f9e4d9fd09ea7a949d6":"EUR","23b6672991ae7b379d36b7db29c38ac4":"SDG","a22d9decc47998b44a36a7484c37314e":"SDG","180727061ac3e6a234cf945cb8f119e3":"MAD","3028a629c4affcfdd5b29cc13d065120":"SRD","9a4a9bf6dc7ece97b8625b3f55acb3a2":"NOK","4e42c6cbde70d01c30fa7e227c5a6626":"SZL","25c82ed78d863c8047281fcfd229298a":"SEK","c12b0a6679d4199308210e66eca31c90":"CHF","458da6c10e2b4f09c726a02f06cc15ba":"SYP","c3c261b4d5c775fd0a8a4d58884eabc4":"TJS","237c77ef06d9f28471af18777229408b":"THB","5203b04ab35c5bce320c1ee96cd4e129":"XOF","e9374cb9412edd8f085935f54f91385a":"NZD","4e5207658c6cd6ddb48befc6c4f08682":"TOP","0a9590217a134adfc2371a7e7017b451":"TTD","1a88d8af6e9c7b3aa67835874f0e8769":"AED","596b519ddd104be1202b1680edd788ea":"TND","938f6a602f47ab11611eac75b7d96342":"TRY","4ae4f25295d016c86688f39f21ec4566":"TMT","ebee30ce4ec75b66d21f48b0924328f7":"USD","a7f615f9447cc59bfca778079a3814a3":"AUD","85bdaabd2818943bbc1b467e300a332e":"UGX","8c57fb99483a3e0c56a73bac38519d9a":"UAH","66d327f218b4073155d0b046381ff675":"MKD","4ea695c1a795ba52c92b9f0110aa7b2d":"EGP","9b8c63a775d413d2dd8b68fd572882b4":"GBP","3d44a52383e9ab002dbd337a751479a3":"GBP","cd079ceee5c703f20b34577fb9b368ab":"JEP","3c9ff57d6d41927b2c97b51af715b6ad":"GBP","7a042d8291ccfb63b31c0617e7a1baa1":"TZS","a7ce3de3b5af9a66c927e463f0230223":"USD","7b4a54aada8152200148585aadbce60e":"USD","76bbb5b1aa821625238326d161269297":"XOF","46f7033bc00aeb7b684f462ffb338f74":"UYU","d7e82bf061f52352d475f1affe3639db":"UZS","cfebc08fb2c603c307ec34e3ba26b0cf":"VEF","e7a84add1a61f63eb41939981e823bf1":"XPF","88207eabcca4cd20581678e66f05a864":"WST","ab1ac5bf7c0d655900deaee5707ff90c":"YER","745b69ef9b6a4cffad40699f6bbd6d45":"ZMW","88e80faafe1bfca1109be2d97aa40c54":"EUR"}'
            )
            if (
              tempCookieCurrency == null ||
              tempCookieCurrency == 'undefined'
            ) {
              jQueryGrizzly.get(
                'https://currency.grizzlyapps.com/83d400c612f9a099fab8f76dcab73a48',
                function (data) {
                  var countryCode = data.value
                  if (countryCode in currencyByCountry) {
                    if (
                      jQueryGrizzly.inArray(
                        currencyByCountry[countryCode],
                        allowedCurrencies
                      ) != -1
                    ) {
                      defaultCurrency = currencyByCountry[countryCode]
                    }
                  }
                  DoublyCurrency.cookie.write(defaultCurrency)
                  initCurrencySwitcher()
                },
                'json'
              )
            } else {
              if (
                jQueryGrizzly.inArray(tempCookieCurrency, allowedCurrencies) !=
                -1
              ) {
                defaultCurrency = tempCookieCurrency
              }
              initCurrencySwitcher()
            }
          } else {
            initCurrencySwitcher()
          }
        } else {
          defaultCurrency = shopCurrency
          DoublyCurrency.cookie.write(defaultCurrency)
          initCurrencySwitcher()
          jQueryGrizzly('.doubly-wrapper').hide()
          jQueryGrizzly('.doubly-float').hide()
        }
        function getParameterByName (name, url) {
          if (!url) url = window.location.href
          name = name.replace(/[\[\]]/g, '$&')
          var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');

            
var results = regex.exec(url)
          if (!results) return null
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, ' '))
        }
      }
    },
    'text'
  )
}
