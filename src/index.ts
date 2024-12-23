export enum HttpStatusCodes {
	// Informacionais
	CONTINUE = 100,
	SWITCHING_PROTOCOLS = 101,
	PROCESSING = 102,
	EARLY_HINTS = 103,

	// Respostas bem-sucedidas
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NON_AUTHORITATIVE_INFORMATION = 203,
	NO_CONTENT = 204,
	RESET_CONTENT = 205,
	PARTIAL_CONTENT = 206,
	MULTI_STATUS = 207,
	ALREADY_REPORTED = 208,
	IM_USED = 226,

	// Redirecionamentos
	MULTIPLE_CHOICES = 300,
	MOVED_PERMANENTLY = 301,
	FOUND = 302,
	SEE_OTHER = 303,
	NOT_MODIFIED = 304,
	USE_PROXY = 305,
	SWITCH_PROXY = 306,
	TEMPORARY_REDIRECT = 307,
	PERMANENT_REDIRECT = 308,

	// Erros do cliente
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	PAYMENT_REQUIRED = 402,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,
	NOT_ACCEPTABLE = 406,
	PROXY_AUTHENTICATION_REQUIRED = 407,
	REQUEST_TIMEOUT = 408,
	CONFLICT = 409,
	GONE = 410,
	LENGTH_REQUIRED = 411,
	PRECONDITION_FAILED = 412,
	PAYLOAD_TOO_LARGE = 413,
	URI_TOO_LONG = 414,
	UNSUPPORTED_MEDIA_TYPE = 415,
	RANGE_NOT_SATISFIABLE = 416,
	EXPECTATION_FAILED = 417,
	I_AM_A_TEAPOT = 418,
	MISDIRECTED_REQUEST = 421,
	UNPROCESSABLE_ENTITY = 422,
	LOCKED = 423,
	FAILED_DEPENDENCY = 424,
	TOO_EARLY = 425,
	UPGRADE_REQUIRED = 426,
	PRECONDITION_REQUIRED = 428,
	TOO_MANY_REQUESTS = 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
	UNAVAILABLE_FOR_LEGAL_REASONS = 451,

	// Erros do servidor
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
	GATEWAY_TIMEOUT = 504,
	HTTP_VERSION_NOT_SUPPORTED = 505,
	VARIANT_ALSO_NEGOTIATES = 506,
	INSUFFICIENT_STORAGE = 507,
	LOOP_DETECTED = 508,
	NOT_EXTENDED = 510,
	NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export type GenericError<T = unknown> = IGenericError<T> | string;

export interface IGenericError<T = unknown> {
	message?: string;
	data?: T;
	extra?: any;
}

export interface IServiceResponse<T = unknown, E = unknown> {
	status: HttpStatusCodes;
	message?: string;
	data?: T;
	error?: GenericError<E>;
	success: boolean;
}

export class HttpResponse {
	// Informacionais
	// CONTINUE = 100
	public static continue<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			data,
			message,
			status: HttpStatusCodes.CONTINUE,
		};
	}

	// SWITCHING_PROTOCOLS = 101
	public static switchingProtocols<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			data,
			message,
			status: HttpStatusCodes.SWITCHING_PROTOCOLS,
		};
	}

	// PROCESSING = 102
	public static processing<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			data,
			message,
			status: HttpStatusCodes.PROCESSING,
		};
	}

	// EARLY_HINTS = 103
	public static earlyHints<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			data,
			message,
			status: HttpStatusCodes.EARLY_HINTS,
		};
	}

	// Respostas bem-sucedidas
	// OK = 200
	public static ok<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			data,
			message,
			status: HttpStatusCodes.OK,
		};
	}
	public static success = HttpResponse.ok;

	// CREATED = 201
	public static created<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.CREATED,
			data,
			message,
		};
	}

	// ACCEPTED = 202
	public static accepted<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.ACCEPTED,
			data,
			message,
		};
	}

	// NON_AUTHORITATIVE_INFORMATION = 203
	public static nonAuthoritativeInformation<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.NON_AUTHORITATIVE_INFORMATION,
			data,
			message,
		};
	}

	// NO_CONTENT = 204
	public static noContent(message?: string): IServiceResponse {
		return {
			success: true,
			status: HttpStatusCodes.NO_CONTENT,
			message,
		};
	}

	// RESET_CONTENT = 205
	public static resetContent(message?: string): IServiceResponse {
		return {
			success: true,
			status: HttpStatusCodes.RESET_CONTENT,
			message,
		};
	}

	// PARTIAL_CONTENT = 206
	public static partialContent<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.PARTIAL_CONTENT,
			data,
			message,
		};
	}

	// MULTI_STATUS = 207
	public static multiStatus<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.MULTI_STATUS,
			data,
			message,
		};
	}

	// ALREADY_REPORTED = 208
	public static alreadyReported<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.ALREADY_REPORTED,
			data,
			message,
		};
	}

	// IM_USED = 226
	public static imUsed<T>(data: T, message?: string): IServiceResponse<T> {
		return {
			success: true,
			status: HttpStatusCodes.IM_USED,
			data,
			message,
		};
	}

	// Redirecionamentos
	// MULTIPLE_CHOICES = 300
	public static multipleChoices<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.MULTIPLE_CHOICES,
			error,
			message,
		};
	}

	// MOVED_PERMANENTLY = 301
	public static movedPermanently<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.MOVED_PERMANENTLY,
			error,
			message,
		};
	}

	// FOUND = 302
	public static found<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.FOUND,
			error,
			message,
		};
	}

	// SEE_OTHER = 303
	public static seeOther<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.SEE_OTHER,
			error,
			message,
		};
	}

	// NOT_MODIFIED = 304
	public static notModified<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NOT_MODIFIED,
			error,
			message,
		};
	}

	// USE_PROXY = 305
	public static useProxy<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.USE_PROXY,
			error,
			message,
		};
	}

	// SWITCH_PROXY = 306
	public static switchProxy<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.SWITCH_PROXY,
			error,
			message,
		};
	}

	// TEMPORARY_REDIRECT = 307
	public static temporaryRedirect<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.TEMPORARY_REDIRECT,
			error,
			message,
		};
	}

	// PERMANENT_REDIRECT = 308
	public static permanentRedirect<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PERMANENT_REDIRECT,
			error,
			message,
		};
	}

	// Erros do cliente
	// BAD_REQUEST = 400
	public static badRequest<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.BAD_REQUEST,
			error,
			message,
		};
	}

	// UNAUTHORIZED = 401
	public static unauthorized<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.UNAUTHORIZED,
			error,
			message,
		};
	}

	// PAYMENT_REQUIRED = 402
	public static paymentRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PAYMENT_REQUIRED,
			error,
			message,
		};
	}

	// FORBIDDEN = 403
	public static forbidden<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.FORBIDDEN,
			error,
			message,
		};
	}

	// NOT_FOUND = 404
	public static notFound<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NOT_FOUND,
			error,
			message,
		};
	}

	// METHOD_NOT_ALLOWED = 405
	public static methodNotAllowed<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.METHOD_NOT_ALLOWED,
			error,
			message,
		};
	}

	// NOT_ACCEPTABLE = 406
	public static notAcceptable<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NOT_ACCEPTABLE,
			error,
			message,
		};
	}

	// PROXY_AUTHENTICATION_REQUIRED = 407
	public static proxyAuthenticationRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PROXY_AUTHENTICATION_REQUIRED,
			error,
			message,
		};
	}

	// REQUEST_TIMEOUT = 408
	public static requestTimeout<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.REQUEST_TIMEOUT,
			error,
			message,
		};
	}

	// CONFLICT = 409
	public static conflict<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.CONFLICT,
			error,
			message,
		};
	}

	// GONE = 410
	public static gone<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.GONE,
			error,
			message,
		};
	}

	// LENGTH_REQUIRED = 411
	public static lengthRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.LENGTH_REQUIRED,
			error,
			message,
		};
	}

	// PRECONDITION_FAILED = 412
	public static preconditionFailed<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PRECONDITION_FAILED,
			error,
			message,
		};
	}

	// PAYLOAD_TOO_LARGE = 413
	public static payloadTooLarge<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PAYLOAD_TOO_LARGE,
			error,
			message,
		};
	}

	// URI_TOO_LONG = 414
	public static uriTooLong<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.URI_TOO_LONG,
			error,
			message,
		};
	}

	// UNSUPPORTED_MEDIA_TYPE = 415
	public static unsupportedMediaType<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.UNSUPPORTED_MEDIA_TYPE,
			error,
			message,
		};
	}

	// RANGE_NOT_SATISFIABLE = 416
	public static rangeNotSatisfiable<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.RANGE_NOT_SATISFIABLE,
			error,
			message,
		};
	}

	// EXPECTATION_FAILED = 417
	public static expectationFailed<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.EXPECTATION_FAILED,
			error,
			message,
		};
	}

	// I_AM_A_TEAPOT = 418
	public static iAmATeapot<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.I_AM_A_TEAPOT,
			error,
			message,
		};
	}

	// MISDIRECTED_REQUEST = 421
	public static misdirectedRequest<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.MISDIRECTED_REQUEST,
			error,
			message,
		};
	}

	// UNPROCESSABLE_ENTITY = 422
	public static unprocessableEntity<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.UNPROCESSABLE_ENTITY,
			error,
			message,
		};
	}

	// LOCKED = 423
	public static locked<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.LOCKED,
			error,
			message,
		};
	}

	// FAILED_DEPENDENCY = 424
	public static failedDependency<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.FAILED_DEPENDENCY,
			error,
			message,
		};
	}

	// TOO_EARLY = 425
	public static tooEarly<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.TOO_EARLY,
			error,
			message,
		};
	}

	// UPGRADE_REQUIRED = 426
	public static upgradeRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.UPGRADE_REQUIRED,
			error,
			message,
		};
	}

	// PRECONDITION_REQUIRED = 428
	public static preconditionRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.PRECONDITION_REQUIRED,
			error,
			message,
		};
	}

	// TOO_MANY_REQUESTS = 429
	public static tooManyRequests<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.TOO_MANY_REQUESTS,
			error,
			message,
		};
	}

	// REQUEST_HEADER_FIELDS_TOO_LARGE = 431
	public static requestHeaderFieldsTooLarge<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE,
			error,
			message,
		};
	}

	// UNAVAILABLE_FOR_LEGAL_REASONS = 451
	public static unavailableForLegalReasons<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
			error,
			message,
		};
	}

	// Erros do servidor
	// INTERNAL_SERVER_ERROR = 500
	public static internalServerError<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.INTERNAL_SERVER_ERROR,
			error,
			message,
		};
	}

	// NOT_IMPLEMENTED = 501
	public static notImplemented<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NOT_IMPLEMENTED,
			error,
			message,
		};
	}

	// BAD_GATEWAY = 502
	public static badGateway<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.BAD_GATEWAY,
			error,
			message,
		};
	}

	// SERVICE_UNAVAILABLE = 503
	public static serviceUnavailable<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.SERVICE_UNAVAILABLE,
			error,
			message,
		};
	}

	// GATEWAY_TIMEOUT = 504
	public static gatewayTimeout<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.GATEWAY_TIMEOUT,
			error,
			message,
		};
	}

	// HTTP_VERSION_NOT_SUPPORTED = 505
	public static httpVersionNotSupported<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.HTTP_VERSION_NOT_SUPPORTED,
			error,
			message,
		};
	}

	// VARIANT_ALSO_NEGOTIATES = 506
	public static variantAlsoNegotiates<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.VARIANT_ALSO_NEGOTIATES,
			error,
			message,
		};
	}

	// INSUFFICIENT_STORAGE = 507
	public static insufficientStorage<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.INSUFFICIENT_STORAGE,
			error,
			message,
		};
	}

	// LOOP_DETECTED = 508
	public static loopDetected<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.LOOP_DETECTED,
			error,
			message,
		};
	}

	// NOT_EXTENDED = 510
	public static notExtended<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NOT_EXTENDED,
			error,
			message,
		};
	}

	// NETWORK_AUTHENTICATION_REQUIRED = 511
	public static networkAuthenticationRequired<E>(error?: GenericError<E>, message?: string): IServiceResponse<null, E> {
		return {
			success: false,
			status: HttpStatusCodes.NETWORK_AUTHENTICATION_REQUIRED,
			error,
			message,
		};
	}
}
