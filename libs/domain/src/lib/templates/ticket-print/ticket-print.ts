export interface TicketPrintTemplate {

  avatarUrl?: string;
  title?: string;
  subtitle?: string;

  content?: Map<string, string>;
}


export class TicketPrintTemplate implements TicketPrintTemplate {

  constructor(
    public ticketPrintTemplate?: TicketPrintTemplate,
  ) {
    Object.assign(this, ticketPrintTemplate)
  }

  static Builder = class Builder implements Partial<TicketPrintTemplate> {
    avatarUrl?: string;
    title?: string;
    subtitle?: string;
    content?: Map<string, string>;

    withAvatarUrl(avatarUrl: string): this & Pick<TicketPrintTemplate, 'avatarUrl'> {
      return Object.assign(this, {avatarUrl: avatarUrl});
    }

    withTitle(title: string): this & Pick<TicketPrintTemplate, 'title'> {
      return Object.assign(this, {title: title});
    }

    withSubtitle(subtitle: string): this & Pick<TicketPrintTemplate, 'subtitle'> {
      return Object.assign(this, {subtitle: subtitle});
    }

    withContent(content: Map<string, string>): this & Pick<TicketPrintTemplate, 'content'> {
      return Object.assign(this, {content: content});
    }

    build(this: TicketPrintTemplate) {
      return new TicketPrintTemplate(this);
    }
  };
}
