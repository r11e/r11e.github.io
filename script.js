// link list
var links = [
"https://business.t-mobile.com/", "https://www.t-mobile.com/offers/deals-hub", "https://www.t-mobilearena.com/", "https://www.t-mobile.com/", "https://acrobat.adobe.com/us/en/", "https://www.adobe.com/experience-cloud.html", "https://stock.adobe.com/", "https://spark.adobe.com/home/", "https://www.adobe.com/products/premiere.html", "https://www.aetna.com/", "https://www.apple.com/", "https://www.apple.com/news/", "https://www.apple.com/tv-app/", "https://www.att.com/", "https://www.business.att.com/", "https://www.boeing.com/commercial/", "https://www.boeing.com/", "https://pharma.bayer.com/", "https://www.centurylink.com/", "https://medium.com/capitalonetech", "https://www.capitalone.com/", "https://www.cisco.com/", "https://online.citi.com/US/login.do", "https://www.citilabs.com/", "https://www.citi.com/ventures/", "https://us.coca-cola.com/", "https://www.xfinity.com/", "https://www.dellemc.com/en-us/index.htm", "https://www.delltechnologies.com/de-de/index.htm", "https://disney.de/", "https://developers.facebook.com/", "https://www.f8.com/", "https://www.equifax.com/personal/", "https://www.ea.com/de-de", "https://www.fedex.com/en-us/home.html", "https://www.ford.com/", "https://www.spectrum.com/", "https://www8.hp.com/de/de/home.html", "https://www.hpe.com/us/en/home.html", "https://www.intel.de/content/www/de/de/homepage.html", "https://www.intel.com/content/www/us/en/gaming/serious-gaming.html", "https://www.irisbylowes.com/", "https://www.lendingtree.com/", "https://masterpass.com/en-us.html", "https://corporate.mcdonalds.com/corpmcd.html", "https://www.microsoft.com/de-de/", "https://www.microsoft.com/design/", "https://www.nestlepurelife.com/en", "https://www.nflexperience.com/", "https://www.nike.com/", "https://www.nike.com/us/en_us/c/nikelab", "https://www.nike.com/soccer/", "https://www.nike.com/us/en_us/c/running", "https://www.nvidia.com/en-us/shield/", "https://www.oracle.com/index.html", "https://www.paypal.com/webapps/mpp/merchant", "https://www.paypal.com/de/home", "https://www.pepsico.com/", "https://www.playstation.com/de-de/", "https://www.redbull.com/de-de/", "https://redbullracing.redbull.com/", "https://www.salesforce.com/ca/blog/", "https://program.developer.samsung.com/", "https://www.samsung.com/us/business/", "https://www.sofi.com/", "https://www.sony.de/", "https://www.sprint.com/", "https://www.starbucks.com/", "https://www.uber.com/de/", "https://foundry.unilever.com/#Home", "https://www.merck.com/index.html", "https://www.utcaerospacesystems.com/", "https://www.verizon.com/business/gateway/", "https://www.verizonwireless.com/", "https://usa.visa.com/", "https://www.walmart.com/", "https://50thanniversary.intel.com/", "https://www.jackinthebox.com/", "https://www.doritosblazethebeat.com/", "https://www.pacificlife.com/", "https://www.dove.com/de/home.html", "https://www.cheetos.com/", "https://www.usfoods.com/", "https://www.priceless.com/", "https://www.thehersheycompany.com/en_us/home.html", "https://www.omnicomgroup.com/", "https://www.ebay.com/", "https://www.blackrock.com/corporate/newsroom", "https://www.blackrockblog.com", "https://www.corning.com/emea/de.html", "https://www.mohawksustainability.com/", "https://www.amerisourcebergen.com/abcnew/", "https://www.statestreet.com/home.html", "https://theblog.adobe.com/", "https://www.morganstanley.com/", "https://newscorp.com/", "https://www.leidos.com/", "https://www.crowncork.com/", "https://corporate.comcast.com/", "https://www.pepsistuff.com", "https://www.ralphlauren.de", "https://lear.com/", "https://www.verizon.com/business/", "https://monsanto.com/", "https://www.kiewit.com/", "https://www.jbhunt.com/", "https://www.cardinalhealth.com/en.html", "https://www.msd.com/", "https://www.dow.com/en-us", "https://www.autoliv.com/", "https://www.activision.com/", "https://www.blizzard.com/de-de/", "https://www.unfi.com/", "https://www.cbs.com/", "https://www.caterpillar.com/", "https://www.nscorp.com/content/nscorp/en.html", "https://www.aramark.com/", "https://www.westrock.com/", "https://www.ussteel.com/", "https://www.sysco.com/", "https://www.baxter.com/", "https://www.jpmorgan.com/country/DE/en/jpmorgan", "https://www.synchrony.com/", "https://www.goldmansachs.com/", "https://www.tysonfoods.com/", "https://www.devonenergy.com/", "https://www.americanexpress.com/de/?inav=NavLogo", "https://gdit.com/", "https://makesmewhole.wholefoodsmarket.com/", "https://us.pg.com/", "https://www.vfc.com/", "https://www.pvh.com/", "https://www.target.com", "https://www.samsung.com/de/", "https://www.xpo.com/", "https://www.gap.com/", "https://www.ge.com/", "https://www.praxair.com/", "https://www.core-mark.com/", "https://www.newyorklife.com/", "https://www.chevrolet.com", "https://www.bookingholdings.com/", "https://www.genworth.com/", "https://www.veritivcorp.com/", "https://www.statefarm.com/", "https://www.lockheedmartin.com/en-us/index.html", "https://www.deanfoods.com/", "https://www.northwesternmutual.com/", "https://de.delta.com/", "https://www.jnj.com/", "https://www.weyerhaeuser.com/", "https://www.esteelauder.com", "https://www.manpowergroup.com/", "https://www.pmi.com/", "https://www.nexteraenergyresources.com/", "https://www.sempra.com/", "https://www.oshkosh.com/", "https://www.southerncompany.com/", "https://www.voya.com/", "https://www.erieinsurance.com/", "https://www.fluor.com/", "https://www.dxc.technology/", "https://www.rrdonnelley.com/", "https://www.bnymellon.com/", "https://www.jacobs.com/", "https://www.carmax.com/", "https://www.dell.com/en-us", "https://www.goodyear.com/?us", "https://www.chevron.com/", "https://www.usbank.com/index.html", "https://www.andeavor.com/", "https://www.amgen.com/", "https://www.wdc.com/de-de/", "https://www.owens-minor.com/", "https://www.ally.com/", "https://www.sherwin-williams.com/", "https://www.hrblock.com/", "https://www.xpo.com/", "https://www.aetna.com/index.html", "https://www.generalmills.com/", "https://hub.united.com/", "https://www.allstate.com/", "https://www.aes.com", "https://aagcu.org/", "https://www.micron.com/", "https://www.aecom.com/", "https://www.jabil.com/", "https://www.quantaservices.com/", "https://www.pulte.com/", "https://www.cdw.com", "https://frontier.com/", "https://www.tiaa.org/", "https://www.xerox.com/", "https://www.yankeecandle.com/", "https://www.tesla.com", "https://www.21cf.com/", "https://www.farmers.com/", "https://www.zimmerbiomet.de/", "https://www.expeditors.com/", "https://www.chsinc.com/", "https://viewfinder.expedia.com/", "https://mosaicscience.com/", "https://www.lennar.com/", "https://www.viacom.com/", "https://www.ecolab.com/", "https://www.cbrands.com/", "https://www.rgare.com/", "https://www.huntingtoningalls.com/", "https://www.lilly.com/", "https://www.landolakes.com/", "https://www.netflix.com/de/", "https://www.firstenergycorp.com/fehome.html", "https://www.lb.com/", "https://www.agcocorp.com/", "https://www.lfg.com", "https://www.xcelenergy.com/", "https://hcatodayblog.com/", "https://www.chrobinson.de", "https://www.insight.com", "https://www.exeloncorp.com/", "https://www.warnermediagroup.com/", "https://www.coty.com/", "https://www.bestbuy.com", "https://www.wesco.com/", "https://www.guardianlife.com/", "https://www.internationalpaper.com/", "https://www.drpeppersnapplegroup.com/", "https://www.drpepper.com/en", "https://www.autonation.com/", "https://www.wm.com/us", "https://www.deere.com/en/", "https://whirlpoolcorp.com/", "https://www.spiritaero.com/", "https://www.lifepointhealth.net/", "https://www.hormelfoods.com/", "https://www.jetblue.com/", "https://blog.appliedmaterials.com/", "https://www.pplweb.com/", "https://www.blackstone.com/", "https://www.caseys.com/", "https://www.stanleyblackanddecker.com/", "https://www.abbott.com/", "https://www.up.com/index.htm", "https://www.kraftheinzcompany.com/", "https://www.jefferies.com/", "https://www.apachecorp.com/", "https://www.alliancedata.com/", "https://www.abbvie.com/", "https://www.fiveyearsout.com/", "https://www.mutualofomaha.com/", "https://www.northropgrumman.com/Pages/default.aspx", "https://www.dovercorporation.com/", "https://www.usaa.com", "https://www.rockwellcollins.com/", "https://www.jll.com/", "https://marriott-hotels.marriott.com/", "https://www.unitedrentals.com/#/", "https://www.dressbarn.com", "https://www.progressive.com/", "https://www.aam.com/", "https://www.rockwellautomation.com", "https://www.motorolasolutions.com", "https://www.owenscorning.com/", "https://www.franklintempleton.com/", "https://www.assurant.com/", "https://www.dillards.com/", "https://www.packagingcorp.com/", "https://www.citizensbank.com/HomePage.aspx", "https://www.asburyauto.com/", "https://www.hanes.com/", "https://www.ncr.com/", "https://www.chemours.com/#", "https://www.iheartmedia.com/", "https://www.celanese.com/", "https://sealedair.com/", "https://www.ugi.com/", "https://www.realogy.com/", "https://www.burlington.com/", "https://www.regions.com", "https://www.spglobal.com", "https://www.conduent.com/", "https://www.clorox.com/", "https://amtrustfinancial.com/", "https://www.kkr.com/", "https://www.regeneron.com/", "https://www.firstam.com/", "https://www.boozallen.com/", "https://www.tollbrothers.com/", "https://www.wyndhamdestinations.com", "https://www.theice.com/", "https://www.westernsouthern.com/", "https://www.magellanhealth.com", "https://www.windstream.com", "https://www.harley-davidson.com", "https://www.fiserv.com/index.aspx", "https://www.pgatour.com", "https://www.avoncompany.com/", "https://www.peabodyenergy.com/", "https://business.simon.com/", "https://www.simon.com/", "https://www.westernunion.com/", "https://www.netapp.com", "https://www.vistraenergy.com/", "https://www.abm.com/", "https://www.cintas.com/", "https://abc.xyz/"
];

openLink = function () {
    var rd = Math.random() * links.length;
    rd = parseInt(rd, 10);
    var link = links[rd];
    window.open(link);
};