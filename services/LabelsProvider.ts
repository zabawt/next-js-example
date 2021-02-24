
interface Labels {
  [key: string]: string;
}
export class LabelsProvider {
  /**
   * should have some persistance layer and IOC implementation
   */
  static async getTranslations(): Promise<Labels> {
    const data = await fetch(
      'https://github.com/zabawt/example-js/raw/main/text.json'
    );
    const json:Labels = await data.json();

    return json || {};
  }
}
