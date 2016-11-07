<?php

return array(

	'*' => array(
		'siteName' => '<%= siteName %>',
		'siteUrl' => getenv('SITE_URL'),
		'timezone' => 'America/Chicago',
		'omitScriptNameInUrls' => true,
		'defaultImageQuality'  => 85,
		'allowedFileExtensions' => 'jpeg, jpg, png, gif, pdf, svg, vcf, zip',
		// custom global variables
		'titleBullet' => '·',
		'homeLinkTitle' => 'back to homepage',
		'googleAnalyticsProfileId' => 'UA-XXXXXXXX-X',
		'campaignMonitorUrl' => '',
		'campaignMonitorEmailFieldId' => '',

		'environmentVariables' => array(
			'basePath' => '../public/',
			'baseUrl' => getenv('SITE_URL') . '/',
		),
		
		'devMode' => getenv('DEVMODE'),
		'enableTemplateCaching' => getenv('ENABLE_CACHE'),
	),
);
