

const {assert} = require('chai');
const puppeteer = require('puppeteer');
let browser;



before(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage();
});

after(async () => {
	await browser.close()
});



const urlSite = 'http://localhost:8080';


let fnTestPage = itemPagina => {

	const urlRel = itemPagina.urlRel;


	describe(`Test Pagina  ${itemPagina.nombre}`, async () => {

		it('verificar pagina OK ' + urlRel, async () => {

			const urlAbs = urlSite + urlRel;

			await page.on('response', response => {

				const req = response.request();

				if (req.url() === urlAbs) {
					response.buffer().then(
						b => {
							const statusActual = response.status();

							assert(200 === statusActual, `no devolvió un 200 ${urlRel} - devolvio ${statusActual}`);

							if (statusActual === 200) {
								const promise = response.text();
								promise.then(
									(body) => {
										itemPagina.htmlBody = body;
									},
									(error) => {
										console.log(error);
									}
								);
							}

						},
						e => {
							assert(false, `${urlRel} - error fatal ${response.url()} , ${e}`);
						}
					);
				}


			});

			await page.goto(urlAbs, {waitUntil: 'networkidle2'});

			await page.screenshot({path: 'test_ui/screen/' + itemPagina.nombre + '.png'});


		}).timeout(10000)
	});
};

let listaPage = [
	{urlRel: '/', nombre: 'home'},
];

listaPage.forEach(itemPagina => {

	fnTestPage(itemPagina);
});

