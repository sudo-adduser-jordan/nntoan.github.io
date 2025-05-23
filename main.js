var header = `

[[g;#EEEEEE;]    |]                                               $$\\
[[g;#EEEEEE;]    |]                                               $$ |
[[g;#EEEEEE;]    |]                 $$\\  $$$$$$\\   $$$$$$\\   $$$$$$$ | $$$$$$\\  $$$$$$$\\   
[[g;#EEEEEE;]    |]                 \\__|$$  __$$\\ $$  __$$\\ $$  __$$ | \\____$$\\ $$  __$$\\ 
[[g;#EEEEEE;]    |]                 $$\\ $$ /  $$ |$$ |  \\__|$$ /  $$ | $$$$$$$ |$$ |  $$ |    
[[g;#EEEEEE;]    |]                 $$ |$$ |  $$ |$$ |      $$ |  $$ |$$  __$$ |$$ |  $$ |      
[[g;#EEEEEE;]    |]                 $$ |\\$$$$$$  |$$ |      \\$$$$$$$ |\\$$$$$$$ |$$ |  $$ |   
[[g;#EEEEEE;]    |]                 $$ | \\______/ \\__|       \\_______| \\_______|\\__|  \\__|
[[g;#EEEEEE;]    |]           $$\\   $$ |
[[g;#EEEEEE;]    |]           \\$$$$$$  |
[[g;#EEEEEE;]    |]            \\______/ 
[[g;#EEEEEE;]    |]                      
[[g;#EEEEEE;]    |]    [[g;#EEEEEE;]Software Developer]
[[g;#EEEEEE;]    |]                                                                                                                    
`
var menu_banner = `
[[g;#EEEEEE;]    |]
[[g;#EEEEEE;]    |]    Please type [[g;#EEEEEE;]menu] for a list of commands.
[[g;#EEEEEE;]    |]
`

var motd = `
[[g;#EEEEEE;]    |]
[[g;#EEEEEE;]    |]    "A byte of time is a byte of gold, but you can't buy that byte of time, with a byte of gold.”
[[g;#EEEEEE;]    |]
`

var system_info = `
[[g;#EEEEEE;]    |]           
[[g;#EEEEEE;]    |]                -/oyddmdhs+:.                      user1@computer1
[[g;#EEEEEE;]    |]            -odNMMMMMMMMNNmhy+-'                   ---------------
[[g;#EEEEEE;]    |]          -yNMMMMMMMMMMMNNNmmdhy+-                 [[g;#EEEEEE;]OS:] Gentoo Linux x86_64
[[g;#EEEEEE;]    |]        'omMMMMMMMMMMMMNmdmmmmddhhy/'              [[g;#EEEEEE;]Kernel:] Linux 6.12.25-gentoo-dist
[[g;#EEEEEE;]    |]        omMMMMMMMMMMMNhhyyyohmdddhhhdo'            [[g;#EEEEEE;]Packages:] 950 (emerge), 7 (flatpak)
[[g;#EEEEEE;]    |]       .ydMMMMMMMMMMdhs++so/smdddhhhhdm+'          [[g;#EEEEEE;]Shell:] zsh 5.9
[[g;#EEEEEE;]    |]        oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.         [[g;#EEEEEE;]DE:] Xfce4 4.20
[[g;#EEEEEE;]    |]         :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh         [[g;#EEEEEE;]WM:] Xfwm4 (X11)
[[g;#EEEEEE;]    |]           .:+sydNMMMMMNNNmmmdddhhhhhhmMmy         [[g;#EEEEEE;]Theme:] Adwaita [GTK3]
[[g;#EEEEEE;]    |]              /mMMMMMMNNNmmmdddhhhhhmMNhs:         [[g;#EEEEEE;]Icons:] win10x
[[g;#EEEEEE;]    |]           'oNMMMMMMMNNNmmmddddhhdmMNhs+'          [[g;#EEEEEE;]Cursor:] Adwaita
[[g;#EEEEEE;]    |]         'sNMMMMMMMMNNNmmmdddddmNMmhs/.            [[g;#EEEEEE;]Terminal:] xfce4-terminal 1.1.5
[[g;#EEEEEE;]    |]        /NMMMMMMMMNNNNmmmdddmNMNdso:'              [[g;#EEEEEE;]Terminal Font:] NerdFont NF 
[[g;#EEEEEE;]    |]       +MMMMMMMNNNNNmmmmdmNMNdso/-            
[[g;#EEEEEE;]    |]       yMMNNNNNNNmmmmmNNMmhs+/-'              
[[g;#EEEEEE;]    |]       /hMMNNNNNNNNMNdhs++/-'                 
[[g;#EEEEEE;]    |]       '/ohdmmddhys+++/:.'                    
[[g;#EEEEEE;]    |]         '-//////:--.                         
[[g;#EEEEEE;]    |]           
`

var Commands = {
    print_banner: false,
    menu: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]motd]               - Display Message of the Days');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]about]              - Summary of me');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]fastfetch]          - Get my dev environment value');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]projects]           - Recent projects of mine');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]skills]             - What I can do');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]github]             - Das github');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]linkedin]           - How I connect for work things');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]contact]            - Contact me');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]credits]            - Credits for this website');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]clear]              - Clear screen');
        this.echo('\t[[g;#EEEEEE;]| ]  [[g;#EEEEEE;]all]                - Run all commands');
        this.echo();
    },
    motd: function () {
        this.echo(motd);
    },
    about: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Name:]         [[g;#EEEEEE;]Jordan]');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Location:]     [[g;#EEEEEE;]United States, Remote]');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Vocation:]     [[g;#EEEEEE;]Software Developer]');
        this.echo('\t[[g;#EEEEEE;]| ]                Experienced in multiple languages, tools, and environments');
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Employment:]   I am currently seeking a [[g;#EEEEEE;]Remote] position.');
        this.echo('\t[[g;#EEEEEE;]| ]                Get in touch if you\'d like more information \t sudo.sendmail.jordan@gmail.com');
        this.echo();
    },
    fastfetch: function () {
        this.echo(system_info);
        this.echo();
    },
    projects: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Code Racer] \t\t\t\t\t\t\t https://github.com/cody/code-racer');
        this.echo('\t[[g;#EEEEEE;]|   Linux Themes] \t\t\t\t\t\t   https://github.com/linuxthemes');
        this.echo('\t[[g;#EEEEEE;]|   Runelite Plugin] \t\t\t\t\t    https://github.com/runelite');
        this.echo('\t[[g;#EEEEEE;]|   Bottles: Eve Online Launcher] \t\t  https://github.com/ohmybash/oh-my-bash');
        this.echo();
    },
    skills: function () {
        this.echo();
        this.echo('\t>  [[g;#EEEEEE;]Languages]');
        this.echo();
        this.echo('\t\t\t  \ue61d \t\t\t\t Javascript');
        this.echo('\t\t\t  \ue738 \t\t\t\t Java');
        this.echo('\t\t\t  \ue73c \t\t\t\t Python');
        this.echo('\t\t\t  \udb81\udfd3 \t\t\t\t Go');
        this.echo('\t\t\t  \udb81\ude72 \t\t\t\t C++');
        this.echo('\t\t\t  \ue61e \t\t\t\t C');
        this.echo('\t\t\t  \ue760 \t\t\t\t Bash');
        this.echo();
        this.echo('\t>   [[g;#EEEEEE;]Frameworks]');
        this.echo();
        this.echo('\t\t\t  \ue7ba \t\t\t\t React');
        this.echo('\t\t\t  \ue8ac \t\t\t\t Spring');
        this.echo('\t\t\t  \udb81\udebf \t\t\t\t Angular');
        this.echo();
        this.echo('\t>   [[g;#EEEEEE;]Platforms]');
        this.echo();
        this.echo('\t\t\t  \ue7e6 \t\t\t\t Linux');
        this.echo('\t\t\t  \ue70f \t\t\t\t Windows');
        this.echo('\t\t\t  \uebaa \t\t\t\t Cloud');
        this.echo('\t\t\t  \uf21f \t\t\t\t Docker');
        this.echo();
        this.echo('\t>   [[g;#EEEEEE;]Tools]');
        this.echo();
        this.echo('\t\t\t  \ue8da \t\t\t\t VSCode');
        this.echo('\t\t\t  \ue745 \t\t\t\t Librewolf');
        this.echo('\t\t\t  \uf092 \t\t\t\t GitHub Desktop');
        this.echo();
    },
    certifications: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Java Developer] \t\t\t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Java Backend Developer] \t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Java Desktop Developer] \t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Java Spring Security] \t\t  https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Python Developer] \t\t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Go Developer]  \t\t\t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Front End Developer] \t\t    https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Javascript Developer] \t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t[[g;#EEEEEE;]|   Linux Certified]  \t\t\t    https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    github: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    linkedin: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]| ]  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Phone:]         [[g;#EEEEEE;]420.420.6969]');
        this.echo('\t[[g;#EEEEEE;]|   Email:]         sudo.sendmail.jordan@gmail.com');
        this.echo('\t[[g;#EEEEEE;]|   LinkedIn:]      https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    credits: function () {
        this.echo();
        this.echo('\t[[g;#EEEEEE;]|   Forked and refactored from: ] https://github.com/nntoan/nntoan.github.io');
        this.echo('\t[[g;#EEEEEE;]|   Using Jquery Terminal Emulator by Jakub Jankiewicz:] http://terminal.jcubic.pl');
        this.echo(menu_banner);
    },
    all: function () {
        this.print_banner = true;
        this.clear();
        this.echo(header);
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('certifications');
        this.exec('fastfetch');
        this.exec('contact');
        this.exec('github');
        this.exec('linkedin');
        this.exec('credits');
        this.print_banner = false;
    },
    clear: function () {
        this.clear()
        this.echo(header)
        this.echo(menu_banner)
    }
};
jQuery(function () {
    $('#terminal_').terminal(
        Commands,
        {
            prompt: '[[g;#EEEEEE;]js]> ',
            completion: true,
            checkArity: false,
            greetings: "",
            clear: false,
        }).exec('all')
})

setTimeout(function() {
    $('#terminal_').find('.terminal-scroller').animate({ scrollTop: 0 }, 700);
}, 50); // delay to ensure content is rendered
    
