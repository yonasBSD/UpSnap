// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.

import { initFormatters } from './formatters';
import type { Locales, Translations } from './i18n-types';
import { loadedFormatters, loadedLocales, locales } from './i18n-util';

const localeTranslationLoaders = {
	de: () => import('./de'),
	'de-DE': () => import('./de-DE'),
	en: () => import('./en'),
	'en-US': () => import('./en-US'),
	es: () => import('./es'),
	'es-ES': () => import('./es-ES'),
	fr: () => import('./fr'),
	'fr-FR': () => import('./fr-FR'),
	id: () => import('./id'),
	'id-ID': () => import('./id-ID'),
	it: () => import('./it'),
	'it-IT': () => import('./it-IT'),
	ja: () => import('./ja'),
	'ja-JP': () => import('./ja-JP'),
	nl: () => import('./nl'),
	'nl-NL': () => import('./nl-NL'),
	pl: () => import('./pl'),
	'pl-PL': () => import('./pl-PL'),
	pt: () => import('./pt'),
	'pt-PT': () => import('./pt-PT'),
	zh: () => import('./zh'),
	'zh-CN': () => import('./zh-CN'),
	'zh-TW': () => import('./zh-TW')
};

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	(loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary });

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations;

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale));
	loadFormatters(locale);
};

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync));

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale));
