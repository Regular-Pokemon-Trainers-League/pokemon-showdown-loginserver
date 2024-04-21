// MySQL DB settings.
exports.mysql = {
	charset: "utf8",
	database: "ps",
	password: "3edcvbgt5ZZPP@$",
	host: 'localhost',
	user: "server",
	socketPath: '',
	prefix: "ntbb_",
	port: 3306,
};

// MySQL DB settings.
exports.replaysdb = {
	charset: "utf8",
	database: "ps",
	password: "3edcvbgt5ZZPP@$",
	host: 'localhost',
	user: "server",
	socketPath: '',
	prefix: "ntbb_",
	port: 3306,
};

/**
 * For the friends database
 *
 * @type {import('pg').PoolConfig | null}
 */
exports.postgres = {
	database: "ps",
	password: "3edcvbgt5ZZPP@$",
	host: 'localhost',
	user: "postgres",
	port: 5432,
};

/** For 2FA verification. */
exports.gapi_clientid = '';

/** Terms banned in names
 * @type {string[]}
 */
exports.bannedTerms = [];

// To use for password hashing.
/** @type {number} */
exports.passwordSalt = 10;

// routes - todo stricter key types?
/** @type {Record<string, string>} */
exports.routes = {
	root: "rptl.us",
};

/** @type {string} */
exports.mainserver = 'showdown';
/** @type {string} */
exports.serverlist = '/var/www/html/pokemon-showdown-client/config/servers.inc.php';
/** @type {string | null} */
exports.colorpath = null;

/** @type {string | null} Password, whether to debug error stacks in request or not*/
exports.devmode = null;

// absolute path to your PS instance. can use the checked-out client that the client clones in.
/** @type {string} */
exports.pspath = '/var/www/html/pokemon-showdown-client/caches/pokemon-showdown';

/**
 * Custom SID maker.
 * @type {(() => string | Promise<string>) | null}
 */
exports.makeSid = null;

/** ips to automatically lock
 * @type {string[]} */
exports.autolockip = [];
/** compromised private key indexes
 * @type {number[]} */
exports.compromisedkeys = [];
/** proxies to trust x-forwarded-for from
 * @type {string[]} */
exports.trustedproxies = [];

/**
    * [Places to allow cors requests from, prefix to use][]
    * @type {[RegExp, string][]}
    */
exports.cors = [
    [/^http:\/\/smogon\.com$/, "smogon.com_"],
    [/^http:\/\/www\.smogon\.com$/, "www.smogon.com_"],
    [/^http:\/\/logs\.rptl\.us$/, "logs.rptl.us_"],
    [/^http:\/\/logs\.rptl\.us:8080$/, "logs.rptl.us_"],
    [/^http:\/\/rptl\.us$/, ""],
    [/^http:\/\/[a-z0-9]+\.rptl\.us$/, ""],
    [/^http:\/\/play\.pokemonshowdown\.com$/, ""],
];

/**
    * array of user IDs who will be given sysop powers on all servers they log into via this loginserver
    * @type {string[]}
    */
exports.sysops = [];

// Private key to use for validating assertions.
/** @type {string} */
exports.privatekey = `-----BEGIN PRIVATE KEY-----
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
Ei+vf+ILLNhDE6u6nXfR0fIS9d+x
-----END PRIVATE KEY-----
`;
// current active challengekeyid (backwards compatibility)
/** @type {number} */
exports.challengekeyid = 4;

/**
 * DBs.
 */
/** @type {typeof exports.mysql | undefined}*/
exports.replaysdb = undefined;
/** @type {typeof exports.mysql | undefined}*/
exports.ladderdb = undefined;

/**
 * For emailing crashes.
 * @type {{
 * options: {
 * 		host: string,
 * 		port: number,
 * 		secure?: boolean,
 * 		auth?: {user: string, pass: string}
 * 	},
 * 	from: string,
 * 	to: string,
 * 	subject: string,
 * } | null}
 */
exports.crashguardemail = null;

/**
 * SSL settings.
 * @type {{key: string, cert: string, port: number} | null}
 */
exports.ssl = null;

/**
 * Port to listen on.
 * @type {number}
 */
exports.port = 8000;

/**
 * Whether or not to reload the config on edit.
 * @type {boolean}
 */
exports.watchconfig = true;

/**
 * An IP to allow restart requests from.
 * @type {null | string}
 */
exports.restartip = null;

/**
 * Custom actions for your loginserver.
 * @type {{[k: string]: import('../src/server').QueryHandler} | null}
 */
exports.actions = null;

exports.cssdir = __dirname + "/customcss/";
/**
 * Path to the client root dir.
 * @type {string | null}
 */
exports.clientpath = null;

/**
 * @type {Record<string, string>}
 */
exports.standings = {
	'-20': "Confirmed",
	'-10': "Autoconfirmed",
	'0': "New",
	"20": "Permalock",
	"30": "Permaban",
	"100": "Disabled",
};
