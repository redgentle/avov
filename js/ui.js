$(document).ready(function() {

	/* add20160126 */
	$(".jsResultTab li a").click(function(){
		$(this).parent().parent().children().removeClass("selected");
		$(this).parent().addClass("selected");
		if ( $(this).parent().hasClass("all") )
		{ 
			$(".resultCon").removeClass("hidden");
			return false;
		}
		else if ( $(this).parent().hasClass("last") )
		{ 
			
		}
		else
		{
			$(".resultCon").addClass("hidden");
			$(".resultCon").eq( $(this).parent().index()-1 ).removeClass("hidden");	
			return false;
		}
	});
	/* //add20160126 */
	
	$(".jsDetailTab li a").click(function(){
		$(this).parent().parent().children().removeClass("selected");
		$(this).parent().addClass("selected");
		$(".detailCon").addClass("hidden");
		$(".detailCon").eq( $(this).parent().index() ).removeClass("hidden");
		return false;
	});
	$(".jsDetailFeeTab li a").click(function(){
		$(this).parent().parent().children().removeClass("selected");
		$(this).parent().addClass("selected");
		$(".detailFeeCon").addClass("hidden");
		$(".detailFeeCon").eq( $(this).parent().index() ).removeClass("hidden");
		return false;
	});
	$(".jsDetailFeeDataTab li a").click(function(){
		$(this).parent().parent().children().removeClass("selected");
		$(this).parent().addClass("selected");
		$(".detailFeeDataCon").addClass("hidden");
		$(".detailFeeDataCon").eq( $(this).parent().index() ).removeClass("hidden");
		return false;
	});
	$(".jsTabCompare li a").click(function(){
		$(this).parent().parent().children().removeClass("selected");
		$(this).parent().addClass("selected");
		$(".conCompare").addClass("hidden");
		$(".conCompare").eq( $(this).parent().index() ).removeClass("hidden");
		return false;
	});
	/* 상세설명 tab */
	$(".btnGnbm").click(function(){
		$(".modalBg").css( "min-height", $( "#wrap").height() );
		$(".mAside, .modalBg").show();
		$(".modalBg").fadeTo(600,0.5);
		$(".mAside").animate({'right':'0'});
	});
	$(".btnGnbClose").click(function(){
		$(".modalBg").fadeTo(600,0);
		$(".mAside").animate({'right':'-100%'},function(){
			$(".mAside, .modalBg").hide();
		});
	});
	/* //상세설명 tab */

	$(".iClose2").click(function(){
		$(".modalBg2, .mPopup2, .mPopup1").hide('slow');
	});

	
	$(document).mousedown(function(e){
		$('.mAside .asideBg').each(function(){
			if( $(".mAside").css('display') == 'block' )
			{
				var l_position = $(this).offset();
				l_position.right = parseInt(l_position.left) + ($(this).width());
				l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());

				if( ( l_position.right >= e.pageX && e.pageX >= l_position.left )
					&& ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) )
				{}
				else
				{
					$(".modalBg").fadeTo(600,0);
					$(".mAside").animate({'right':'-100%'}, function(){
						$(".mAside, .modalBg").hide();
					});
				}
			}
		});
	});
	//$("select[name=testSel] option[value="+str+"]").attr("selected",true);

	/* add20160224 */
	$("#jsSelectFee").change(function(){
		$(".mSet1 .lt dd .info").show().text( $(this).val() );
	});
	/* //add20160224 */

});

