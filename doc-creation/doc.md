<div style="font-family: sans-serif;">
    <h2>API Documentation</h2>
    <ul style="list-style-type:none; padding:0;" >
        
        
            <li style="
               margin-bottom: 12px;
               margin-top: 3px;"><a style ="font-family: monospace;
               font-size: 1.2em; text-decoration: none" href="#/url2png_post">
                <span style="color:#08C;">/url2png</span>
                <div style="display: inline-block; color: #FFF; border-radius: 3px; padding: .25em .5em;
                         background-color: #13c20f;
                        ">POST</div></a></li>
        
    
    </ul>
</div>
<hr>
<ul style="list-style-type:none; padding:0; font-family: sans-serif;">
    
    <li style="list-style-type:none; padding:0">
        <header style ="font-family: monospace;
               font-size: 1.5em;
               margin-bottom: 12px;
               margin-top: 3px; color:#333">/url2png</header>
        <ul style="list-style-type:none; padding:0">
            
            <li style="font-family: sans-serif;
                  list-style-type: none;
                  border-radius: 3px;
                  position: relative;
                  border: 1px solid #949493;
                  background-color: #fff;
                  margin-bottom: 30px">
                <header style="overflow: hidden;
                     cursor: pointer;
                     display: table;
                     width: 100%;
                     min-height: 31px;
                      background-color: rgba(19,194,15,.1);
                        ">
                    <div style="    font-family: monospace;
                        font-size: 1pc;
                        padding: .5em;
                        display: table-cell;
                        border-top-left-radius: 1px;
                        margin-right: .4em;
                        min-width: 68px;
                        text-align: center;
                         background-color: #13c20f;
                        
                        color: #ffffff;
                        float:left"><a style="color:#FFFFFF" name="/url2png_post">/url2png POST</a>
                    </div>
                </header>
                <div style="padding: 0 1em; font-size: 13px">
                    <section>
                        <h4 style="margin:.75em 0; font-size: 15px;line-height: 1.1;">Convert webpage to PNG.</h4>
                    </section>
                    <section>
                        <p style="margin: 0 0 12px;">The url2png endpoint accepts a URL and returns a link to download a PNG representation of the web page at the URL.</p>
                    </section>
                    <section>
                        <h4 style="font-size: 15px;line-height: 1.1;">Parameters</h4>
                        <div style="margin: .3em 0 .5em;">
                            <table style="width: 100%;border-collapse: collapse;">
                                <thead>
                                <tr style="background-color: #f7f7f7; font-size: 14px">
                                    <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Name</th>
                                    <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Required</th>
                                    <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Located in</th>
                                    <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Type</th>
                                    <th style="padding: 6px 8px;border: #e0e0e0 1px solid; width: 50%;
                                       ">Description</th>

                                </tr>
                                </thead>
                                <tbody>
                                
                                <tr>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">url</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">true</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">body</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">string ()</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">URL of webpage to convert</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">viewport_width</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">false</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">body</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">number (integer)</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">The width of the produced PNG (default is 1440px)</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">delay</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">false</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">body</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">number (integer)</td>
                                    <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">The time delay (ms) before executing image capture (default is 5000 ms)</td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section>
                        <div style=" margin: .3em 0 .5em;">

                            
                                <div>
                                    <h4 style="font-size: 15px;line-height: 1.1;">
                                    Success
                                        200 (Object)</h4>
                                    <table style="width: 100%;border-collapse: collapse;">
                                        <thead>
                                        <tr style="background-color: #f7f7f7;">
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Field</th>
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Type</th>
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        

                                        
                                        

                                        
                                        <tr style="border-bottom: 1px solid silver;">
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">message</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">string</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">success</td>
                                        </tr>
                                        
                                        

                                        
                                        <tr style="border-bottom: 1px solid silver;">
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">downloadURL</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">string</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">The relative URL for download of the captured image. Root will be the same as the API.</td>
                                        </tr>
                                        
                                        
                                        </tbody>
                                    </table>
                                </div>
                            
                                <div>
                                    <h4 style="font-size: 15px;line-height: 1.1;">
                                    Error 
                                        500 (Object)</h4>
                                    <table style="width: 100%;border-collapse: collapse;">
                                        <thead>
                                        <tr style="background-color: #f7f7f7;">
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Field</th>
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Type</th>
                                            <th style="padding: 6px 8px;border: #e0e0e0 1px solid">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        

                                        
                                        

                                        
                                        <tr style="border-bottom: 1px solid silver;">
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">message</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">string</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">Error message</td>
                                        </tr>
                                        
                                        

                                        
                                        <tr style="border-bottom: 1px solid silver;">
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">error</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">object</td>
                                            <td style="padding: 12px 8px;border: #e0e0e0 1px solid;">Error object.</td>
                                        </tr>
                                        
                                        
                                        </tbody>
                                    </table>
                                </div>
                            

                        </div>
                    </section>
                </div>
            </li>
            
        </ul>
        
</ul>
